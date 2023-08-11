// // components/AddRoundForm.js
// import React from 'react'
// import { Box, Button, TextField } from '@mui/material'
// import { useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import * as Yup from 'yup'

// const IncrementDecrementField = ({ value, onChange }) => {
//     return (
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <Button onClick={() => onChange(value - 1)}>-</Button>
//             <TextField
//                 value={value}
//                 onChange={(event) => onChange(event.target.value)}
//                 margin="small"
//                 label=""
//                 name=""
//                 id="password"
//                 autoFocus
//             />
//             <Button onClick={() => onChange(value + 1)}>+</Button>
//         </Box>
//     )
// }

// const validationSchema = Yup.object({
//     att_og_1_by_fighter1: Yup.number()
//         .required('Ce champ est obligatoire')
//         .min(0, 'La valeur ne doit pas être inférieure à 0'),
//     att_og_2_by_fighter1: Yup.number()
//         .required('Ce champ est obligatoire')
//         .min(0, 'La valeur ne doit pas être inférieure à 0'),
//     // ... autres validations
// })

// const AddRoundForm = () => {
//     const {
//         register,
//         handleSubmit,
//         setValue,
//         formState: { errors },
//     } = useForm({
//         defaultValues: {
//             att_og_1_by_fighter1: 0,
//             att_og_2_by_fighter1: 0,
//             // ... autres valeurs par défaut
//         },
//         resolver: yupResolver(validationSchema),
//     })

//     const onSubmit = (data) => {
//         console.log(data)
//     }

//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <Box>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                     <Box>SITUATION</Box>
//                     <Box>POINTS</Box>
//                     <Box>GARDE</Box>
//                 </Box>
//                 {/* ... other rows */}
//                 <Box
//                     sx={{
//                         display: 'flex',
//                         justifyContent: 'space-between',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <Box>ATTAQUE</Box>
//                     <Box>
//                         <Box>1 POINT</Box>
//                         <Box>2 POINT</Box>
//                         {/* ... other points */}
//                     </Box>
//                     <Box>
//                         <IncrementDecrementField
//                             value={
//                                 errors.att_og_1_by_fighter1
//                                     ? 0
//                                     : register('att_og_1_by_fighter1').value
//                             }
//                             onChange={(value) =>
//                                 setValue('att_og_1_by_fighter1', value)
//                             }
//                         />
//                         <div style={{ color: 'red' }}>
//                             {errors.att_og_1_by_fighter1?.message}
//                         </div>
//                         <IncrementDecrementField
//                             value={
//                                 errors.att_og_2_by_fighter1
//                                     ? 0
//                                     : register('att_og_2_by_fighter1').value
//                             }
//                             onChange={(value) =>
//                                 setValue('att_og_2_by_fighter1', value)
//                             }
//                         />
//                         <div style={{ color: 'red' }}>
//                             {errors.att_og_2_by_fighter1?.message}
//                         </div>
//                         {/* ... autres champs */}
//                     </Box>
//                 </Box>
//                 <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//                     <Button type="submit" variant="contained">
//                         Ajouter le round
//                     </Button>
//                 </Box>
//             </Box>
//         </form>
//     )
// }

// export default AddRoundForm
