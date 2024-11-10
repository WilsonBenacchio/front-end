// src/apiFunctions.js
import api from './api';

// Função para listar todos os orçamentos
export async function listarOrcamentos() {
  try {
    const response = await api.get('/orcamentos/listar');
    return response.data;
  } catch (error) {
    console.error("Erro ao listar orçamentos:", error);
    throw error;
  }
}

// Função para criar um novo orçamento
export async function criarOrcamento(dadosOrcamento) {
  try {
    const response = await api.post('/orcamentos/criar', dadosOrcamento);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar orçamento:", error);
    throw error;
  }
}

// Função para listar todos os projetos
export async function listarProjetos() {
  try {
    const response = await api.get('/projetos/listar');
    return response.data;
  } catch (error) {
    console.error("Erro ao listar projetos:", error);
    throw error;
  }
}

// Função para criar um novo projeto
export async function criarProjeto(dadosProjeto) {
  try {
    const response = await api.post('/projetos/criar', dadosProjeto);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar projeto:", error);
    throw error;
  }
}
