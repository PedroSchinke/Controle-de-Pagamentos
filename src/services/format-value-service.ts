export const formatValue = (data: number) => {
  const originalValue = data

  const valueInR$ = originalValue.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  return valueInR$
}
