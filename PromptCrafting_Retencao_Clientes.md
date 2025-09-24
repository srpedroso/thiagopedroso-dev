
# Exemplo de PromptCrafting para Retenção de Clientes  
## 🤖 Automação Inteligente para Reversão de Churn

"Este material apresenta apenas um conceito simplificado, destinado a estudo de caso e fins educativos, não sendo uma solução definitiva para aplicação real."

---

### 🔹 Introdução
Reter clientes é tão importante quanto conquistá-los. Com o crescimento de plataformas digitais, a aplicação de **IA para identificar riscos de churn** e gerar ações estratégicas se tornou essencial.

---

### 🔹 Indicadores Usados

| Indicador | O que mede | Observações |
|-----------|-----------|-------------|
| **NPS (Net Promoter Score)** | Satisfação e propensão à recomendação | Valor de 0 a 10 |
| **Inatividade do cliente** | Tempo sem utilizar a plataforma | Quanto maior, maior o risco |
| **Engajamento em campanhas** | Interação com e-mails, notificações ou promoções | Percentual de engajamento |

---

### 🔹 Exemplo de PromptCrafting

Você é um **especialista sênior em Customer Success**, com profundo conhecimento em **engajamento, retenção, satisfação do cliente e prevenção de churn**. Receberá dados detalhados de clientes no seguinte formato:

```json
[
  {"cliente_id": 101, "nome": "Ana", "email": "ana@email.com", "nps": 6, "dias_inativo": 45, "engajamento_campanhas": 10},
  {"cliente_id": 102, "nome": "Bruno", "email": "bruno@email.com", "nps": 9, "dias_inativo": 5, "engajamento_campanhas": 80}
]
```

#### 📝 Suas Tarefas:
1. Avalie o **risco de churn** de cada cliente como `"alto"`, `"médio"` ou `"baixo"`.  
   - Considere **NPS, dias inativo e engajamento em campanhas**.  
2. Crie uma **mensagem personalizada e persuasiva** para retenção.  
   - Deve refletir **empatia, incentivo e abordagem estratégica**.  
3. Justifique cada recomendação detalhando os motivos.  
4. Estruture a resposta **apenas em JSON** com os campos:  

```text
"cliente_id"
"risco_churn"
"mensagem_personalizada"
"justificativa"
```

#### 🔹 Instruções Extras:
- Seja **claro, objetivo e profissional**.  
- Use **dados do cliente** para tornar cada mensagem única e convincente.  
- Considere **gatilhos de retenção** que aumentem engajamento e satisfação.  

---

### 🔹 Exemplo de Saída

```json
[
  {
    "cliente_id": 101,
    "risco_churn": "alto",
    "mensagem_personalizada": "Olá Ana! Notamos que você está há algum tempo sem interagir com nossas campanhas. Queremos entender melhor suas necessidades e garantir que você aproveite todos os benefícios do nosso serviço. Podemos agendar um momento rápido para ouvir seu feedback?",
    "justificativa": "O NPS de Ana é 6 (satisfação neutra), está inativa há 45 dias e tem baixo engajamento (10%) nas campanhas. Esses fatores indicam alto risco de churn, portanto a mensagem busca reengajamento empático e personalizado."
  },
  {
    "cliente_id": 102,
    "risco_churn": "baixo",
    "mensagem_personalizada": "Olá Bruno! Estamos felizes com sua participação nas campanhas e com seu feedback positivo. Continue aproveitando nossas novidades e, se tiver sugestões, adoraríamos ouvir. Sua opinião é muito importante para nós!",
    "justificativa": "O NPS de Bruno é 9 (alto), está ativo recentemente (5 dias inativo) e tem alto engajamento (80%) nas campanhas. Esses indicadores sugerem baixo risco de churn, então a mensagem foca em reconhecimento e manutenção do engajamento."
  }
]
```

---

### 🔹 O que esse exemplo mostra:
- Classificação de **risco de churn** com base em NPS, engajamento e dias inativo.  
- **Mensagens personalizadas** para cada cliente, com tom empático e estratégico.  
- **Justificativa detalhada** que explica a decisão da IA.

---

### 🔹 Benefícios
- Comunicação **automatizada e personalizada**.  
- **Aumento da retenção** de clientes.  
- Escalável para **grandes bases de usuários**.
