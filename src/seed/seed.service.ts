import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { PokemonResponse } from './interfaces/pokemons-response.interface';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,

    private readonly http: AxiosAdapter,
  ) {}

  /**
   * Plant Seed with all initial poekmons from https://pokeapi.co/api/v2/pokemon?limit=151
   * @returns Pokemons seed
   */
  async executeSeed() {
    await this.pokemonModel.deleteMany({}).exec();

    const data = await this.http.get<PokemonResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=151',
    );

    const pokemonsToInsert: { name: string; no: number }[] = [];

    data.results.forEach(async ({ name, url }) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];

      pokemonsToInsert.push({ no, name });
    });

    await this.pokemonModel.insertMany(pokemonsToInsert);

    return {
      message: 'Seed executed successfully',
      data: pokemonsToInsert,
    };
  }
}
