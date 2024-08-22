import * as yup from "yup"
import { documentValidator } from "./documentValidator"

export const formValidation = yup.object({
  document: yup.string().required('O documento é obrigatório')
    .matches(
      /^[0-9]+$/,
      'Somente números são permitidos. Ex: CPF: 43386698883, CNPJ: 27132115000196',
    )
    .matches(
      /(\d{11}|\d{14})/,
      'Quantidade de números inválida. O CPF precisa ter 11 dígitos. O CNPJ precisa ter 14 dígitos.'
    )
    .test(
      'document-validator',
      'O documento é inválido. Favor informar um CPF ou CNPJ válidos. Ex: 43386698883, 27132115000196',
      (value) => documentValidator(value),
    ),
  name: yup.string().required('O nome é obrigatório'),
  farmName: yup.string().required('O nome da fazenda é obrigatório'),
  addresses: yup.object({
    city: yup.string().required('A cidade é obrigatória'),
    state: yup.string().required('O estado é obrigatório').max(2, 'Pode no máximo 2 letras. Ex: SP'),
    totalArea: yup.string().required('A área total da fazenda é obrigatória')
      .test({
        message: 'A soma de área agrícultável e vegetação, não deverá ser maior que a área total da fazenda.',
        test: function (value) {
          const arableArea = this.parent.arableArea ? this.parent.arableArea : 0
          const vegetationArea = this.parent.vegetationArea ? this.parent.vegetationArea : 0
          return value < (arableArea + vegetationArea)
        }
      }),
    arableArea: yup.string().required('A área agricultável é obrigatória'),
    vegetationArea: yup.string().required('A área de vegetação é obrigatória'),
    cropsPlanted: yup.array().of(yup.object({
      name: yup.string().required('O id da cultura é obrigatória'),
      planted: yup.boolean().default(false),
    }))
    .test({
      message: 'Pelo menos uma cultura precisa estar marcada',
      test: function (list) {
        return list?.some(value => value.planted)
      }
    }),
  })
})
