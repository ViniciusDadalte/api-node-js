const db = require('../database/connection'); 

module.exports = {
    async listarCategoria(request, response) {
        try {
            const sql = `
                SELECT cat_id, cat_nome FROM CATEGORIA;
            `;
            
            const [rows] = await db.query(sql);
            const nResgistros = rows.length;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de categorias', 
                nResgistros,
                dados: rows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async cadastrarCategoria(request, response) {
        try {
            const { cat_nome } = request.body;
            const sql = `
            INSERT INTO CATEGORIA 
              (cat_nome) 
            VALUES
              (?);
            `;

            const values = [cat_nome];
            const [result] = await db.query(sql, values);

            const dados = {
                cat_id: result.insertId,
                cat_nome
            };
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de categoria', 
                dados: dados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async editarCategoria(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração na categoria', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async apagarCategoria(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão da categoria', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
};  
