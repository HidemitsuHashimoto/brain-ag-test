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
    totalArea: yup.string().required('A área total da fazenda é obrigatória'),
    arableArea: yup.string().required('A área agricultável é obrigatória'),
    vegetationArea: yup.string().required('A área de vegetação é obrigatória'),
    cropsPlanted: yup.array().of(yup.object({
      name: yup.string().required('O id da cultura é obrigatória'),
      planted: yup.boolean().default(false),
    })).required('A cultura plantada é obrigatória').min(1),
  })
})
