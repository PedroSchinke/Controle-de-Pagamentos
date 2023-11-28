import { CaretLeft, Pencil, Trash } from 'phosphor-react'
import {
  DeleteReceiptButton,
  DetailedReceiptContainer,
  DetailedReceiptInfos,
  DetailedReceiptLayout,
  ReceiptOptionButtons,
  UpdateReceiptButton,
} from './styles'
import { NavLink } from 'react-router-dom'

export function DetailedReceipt() {
  return (
    <DetailedReceiptLayout>
      <DetailedReceiptContainer>
        <NavLink to="/consultar/recebimento">
          <button className="back_button">
            <CaretLeft />
            Voltar
          </button>
        </NavLink>
        <h1>Detalhes do recebimento</h1>
        <DetailedReceiptInfos>
          <div>
            <span>Nome do doador</span>
            <h2>Fulano da Silva</h2>
          </div>
          <div>
            <span>Data</span>
            <h2>25/11/2023</h2>
          </div>
          <div>
            <span>Valor</span>
            <h2>R$30,00</h2>
          </div>
          <div>
            <span>Tipo de recebimento</span>
            <h2>Pix</h2>
          </div>
          <div>
            <span>Cadastrado em</span>
            <h2>25/11/2023 14:50</h2>
          </div>
          <div>
            <span>Editado em</span>
            <h2>25/11/2023 15:50</h2>
          </div>
          <div>
            <span>Descrição</span>
            <h3>Sem descrição</h3>
          </div>
        </DetailedReceiptInfos>
        <ReceiptOptionButtons>
          <UpdateReceiptButton>
            <Pencil />
            editar
          </UpdateReceiptButton>
          <DeleteReceiptButton>
            <Trash />
            excluir
          </DeleteReceiptButton>
        </ReceiptOptionButtons>
      </DetailedReceiptContainer>
    </DetailedReceiptLayout>
  )
}
