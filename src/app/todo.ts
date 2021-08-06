export class Todo {
  id: number;
  description: string;
  done: boolean;
  createdDate: String;
  doneDate: String;
}

/* Na versão 11 do angular tem que inicialar os objetos do constructor, soluçao1 colocar ? quer dizer não obriga a inicializar. Solução2 colocar "strictPropertyInitialization": false, , no tsconfig.json compilerOptions */
