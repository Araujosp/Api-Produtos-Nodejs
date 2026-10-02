export function criarProdutoModel ({pool}){

async function listarTodos (){

const [linhas] = await pool.query
('SELECT * FROM produtos');

return linhas.map (p=> ({...p,
    preco: Number(p.preco)
 }));

}

async function buscarPorId(id){
    const [linhas] = await pool.query ('SELECT * FROM PRODUTOS WHERE id = ?', [id]);
    if (linhas.lenght === 0) return null;
    return {...linhas[0], preco: Number(linhas[0].preco)};
}

async function criar (produto){
    const sql = 'INSERT INTO produtos (nome, preco, estoque, categorias) VALUES (?, ?, ?, ?)';
    const valores = [produto.nome, produto.preco, produto.estoque, produto.categoria];
    const [resultado] = await pool.query (sql, valores);
    return { ...produto, id:resultado.insertId}
}



}