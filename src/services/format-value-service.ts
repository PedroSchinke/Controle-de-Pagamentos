export const formatValue = (data: number) => {
  const originalValue = data

  const valueInReais = originalValue.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  return valueInReais
}
