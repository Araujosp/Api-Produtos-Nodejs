import express from  'express';

export function criarProdutoRoutes({produtoController}){
    const router = express.Router();//ele permite a comunicação do nossos endpoints e nosso servidor
    router.get('/', produtoController.listar); //rota de listar todos os produtos
    router.get('/:id', produtoController.buscar);
    router.post('/', produtoController.criar);
    return router
}