import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({});

    const { results } = await this.http.get<PokeResponse>(
      `https://pokeapi.co/api/v2/pokemon?limit=650`,
    );

    const pokemonToInsert: { name: string; numero: number }[] = [];

    results.map(({ name, url }) => {
      const segments = url.split('/');
      const numero = +segments[segments.length - 2];

      // await this.pokemonModel.create({ name, numero });
      pokemonToInsert.push({ name, numero });
    });

    await this.pokemonModel.insertMany(pokemonToInsert);

    return 'Seed Executé';
  }
}
