export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor
  /**
   * DI - Dependency Injection
   */() {}

  execute({ base, limit }: CreateTableOptions) {
    let outputMessage = "";
    for (let i = 0; i <= limit; i++) {
      outputMessage += `${base} * ${i} = ${base * i}\n`;
    }
    return outputMessage;
  }
}
