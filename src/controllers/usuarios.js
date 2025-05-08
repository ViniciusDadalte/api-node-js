const db = require('../database/connection'); 

module.exports = {
    async listarUsuarios(request, response) {
        try {
            const sql = `
                SELECT usu_id, usu_nome, usu_email, usu_senha, usu_data_cadastro, usu_tipo FROM USUARIOS;
            `;
            
            const [rows] = await db.query(sql);
            const nResgistros = rows.length;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de usuários', 
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
    async cadastrarUsuarios(request, response) {
        try {
            const { usu_nome, usu_email, usu_senha, usu_data_cadastro, usu_tipo } = request.body;
            const sql = `
            INSERT INTO USUARIOS 
              (usu_nome, usu_email, usu_senha, usu_data_cadastro, usu_tipo) 
            VALUES
              (?, ?, ?, ?, ?);
            `;

            const values = [usu_nome, usu_email, usu_senha, usu_data_cadastro, usu_tipo];
            const [result] = await db.query(sql, values);

            const dados = {
                usu_id: result.insertId,
                usu_nome,
                usu_email,
                usu_tipo 
            }; 
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de usuários', 
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
    async editarUsuarios(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro de usuário', 
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
    async apagarUsuarios(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de usuário', 
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
