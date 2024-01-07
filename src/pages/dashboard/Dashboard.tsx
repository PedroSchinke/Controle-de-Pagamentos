import ReactApexChart from 'react-apexcharts'
import { ApexOptions } from 'apexcharts'
import {
  DashboardLayout,
  TotalRevenueCard,
  RevenueByClientCard,
  RevenueByActivityCard,
  DivisionCardLine,
} from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { format, startOfMonth } from 'date-fns'
import { Loading } from '../../components/loading/Loading'
import { formatValue } from '../../services/format-value-service'
import { SummaryByClientResult } from './components/summary by client result/SummaryByClientResult'

export interface atividadeValorListProps {
  atividade: string
  valor: number
}

export interface clienteValorListProps {
  cliente: string
  valor: number
}

interface SummaryProps {
  valor: number
  atividadeValorList: atividadeValorListProps[]
  clienteValorList: clienteValorListProps[]
}

export function Dashboard() {
  const [summary, setSummary] = useState<SummaryProps>()

  useEffect(() => {
    const getSummary = async () => {
      const today = new Date()
      const firstDayOfMonth = startOfMonth(today)

      const formattedToday = format(today, 'yyyy-MM-dd')
      const formattedFirstDay = format(firstDayOfMonth, 'yyyy-MM-dd')

      const response = await api.get(
        `/resumo?dataIni=${formattedFirstDay}&dataFim=${formattedToday}`,
      )

      console.log(response)

      if (response.status === 200) {
        setSummary(response.data)
      }
    }

    const getLastSixMonthsSummary = async () => {
      const response = await api.get(
        `/resumo?dataIni=2023-06-01&dataFim=2023-12-31`,
      )

      console.log(response)
    }

    getSummary()
    getLastSixMonthsSummary()
  }, [])

  const revenue = [
    {
      data: 1150,
    },
    {
      data: 1250,
    },
    {
      data: 1350,
    },
    {
      data: 1450,
    },
    {
      data: 1550,
    },
    {
      data: 1350,
    },
  ]

  const chartSeries = [
    {
      name: 'Faturamento',
      data: revenue.map((data) => data.data),
    },
  ]

  const chartOptions: ApexOptions = {
    chart: {
      height: 300,
      width: 350,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        distributed: true,
      },
    },
    colors: ['#047ECF'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: '',
      align: 'left',
      style: {
        fontSize: '0.7rem',
        fontFamily: 'Inter, sans-serif',
        color: '#263238',
      },
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5,
      },
    },
    tooltip: {
      style: {
        fontSize: '0.9rem',
        fontFamily: 'Inter, sans-serif',
      },
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ['Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      labels: {
        style: {
          fontSize: '0.92rem',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '0.85rem',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 'bold',
        },
        formatter: function (value: number) {
          return `R$ ${value.toFixed(0)}`
        },
      },
    },
  }

  if (!summary) {
    return <Loading />
  }

  const sortedAtividades = [...summary.atividadeValorList].sort(
    (a, b) => b.valor - a.valor,
  )

  const sortedClientes = [...summary.clienteValorList].sort(
    (a, b) => b.valor - a.valor,
  )

  const valueInReais = formatValue(summary.valor)

  return (
    <DashboardLayout>
      <TotalRevenueCard>
        <div className="total_revenue">
          <div>
            <h1 className="total_revenue_title">Faturamento</h1>
            <p id="time_tag">Este mês</p>
          </div>
          <span className="total_revenue_value">{valueInReais}</span>
        </div>

        <div id="card_line_container">
          <DivisionCardLine />
        </div>

        <h1 className="evolution_title">Evolução</h1>
        <p id="evolution_time_tag">Últimos seis meses</p>

        <ReactApexChart
          id="chart"
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={250}
          width={350}
        />
      </TotalRevenueCard>

      <RevenueByClientCard>
        <h1 id="card_title">Por cliente</h1>

        <p id="time_tag">Este mês</p>

        {sortedClientes.map((client) => {
          return (
            <SummaryByClientResult
              key={client.cliente}
              cliente={client.cliente}
              valor={client.valor}
            />
          )
        })}
      </RevenueByClientCard>

      <RevenueByActivityCard>
        <h1 id="card_title">Por atividade</h1>

        <p id="time_tag">Este mês</p>

        {sortedAtividades.map((atividade) => {
          return (
            <SummaryByClientResult
              key={atividade.atividade}
              cliente={atividade.atividade}
              valor={atividade.valor}
            />
          )
        })}
      </RevenueByActivityCard>
    </DashboardLayout>
  )
}
