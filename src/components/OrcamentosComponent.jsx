// src/components/OrcamentosComponent.jsx
import React, { useEffect, useState } from 'react';
import { listarOrcamentos, criarOrcamento } from '../apiFunctions';

function OrcamentosComponent() {
  const [orcamentos, setOrcamentos] = useState([]);
  const [novoOrcamento, setNovoOrcamento] = useState({
    valor: '',
    dataEntrega: '',
    formaPagamento: '',
    status: '',
  });

  useEffect(() => {
    listarOrcamentos().then(setOrcamentos).catch(console.error);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoOrcamento((prevOrcamento) => ({
      ...prevOrcamento,
      [name]: value,
    }));
  };

  const handleCreateOrcamento = (e) => {
    e.preventDefault();
    criarOrcamento(novoOrcamento).then((orcamento) => {
      alert('Orçamento criado com sucesso!');
      setOrcamentos([...orcamentos, orcamento]);
    }).catch((error) => {
      console.error('Erro ao criar orçamento:', error);
    });
  };

  return (
    <div>
      <h2>Lista de Orçamentos</h2>
      {orcamentos.length > 0 ? (
        orcamentos.map((orcamento) => (
          <div key={orcamento.id}>
            <p>Valor: {orcamento.valor}</p>
            <p>Data de Entrega: {orcamento.dataEntrega}</p>
            <p>Forma de Pagamento: {orcamento.formaPagamento}</p>
            <p>Status: {orcamento.status}</p>
          </div>
        ))
      ) : (
        <p>Nenhum orçamento encontrado.</p>
      )}

      <h3>Criar Novo Orçamento</h3>
      <form onSubmit={handleCreateOrcamento}>
        <label>
          Valor:
          <input
            type="number"
            name="valor"
            value={novoOrcamento.valor}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Data de Entrega:
          <input
            type="date"
            name="dataEntrega"
            value={novoOrcamento.dataEntrega}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Forma de Pagamento:
          <input
            type="text"
            name="formaPagamento"
            value={novoOrcamento.formaPagamento}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Status:
          <input
            type="text"
            name="status"
            value={novoOrcamento.status}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Criar Orçamento</button>
      </form>
    </div>
  );
}

export default OrcamentosComponent;
