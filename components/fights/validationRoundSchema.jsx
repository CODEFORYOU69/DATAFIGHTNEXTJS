import * as Yup from 'yup'

const validationRoundSchema = Yup.object({
    att_og_1_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),

    att_og_2_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_og_3_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_og_4_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_og_5_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_og_1_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_og_2_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_og_3_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_og_4_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_og_5_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_fg_1_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_fg_2_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),

    att_fg_3_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_fg_4_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_fg_5_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_fg_1_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_fg_2_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_fg_3_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_fg_4_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_fg_5_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_od_1_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_od_2_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),

    att_od_3_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_od_4_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_od_5_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_od_1_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_od_2_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_od_3_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_od_4_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_od_5_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_fd_1_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_fd_2_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),

    att_fd_3_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_fd_4_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_fd_5_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_fd_1_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_fd_2_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_fd_3_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_fd_4_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    att_fd_5_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_og_1_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),

    def_og_2_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_og_3_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_og_4_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_og_5_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_og_1_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_og_2_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_og_3_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_og_4_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_og_5_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_fg_1_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_fg_2_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),

    def_fg_3_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_fg_4_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_fg_5_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_fg_1_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_fg_2_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_fg_3_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_fg_4_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_fg_5_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_od_1_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_od_2_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),

    def_od_3_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_od_4_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_od_5_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_od_1_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_od_2_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_od_3_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_od_4_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_od_5_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_fd_1_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_fd_2_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),

    def_fd_3_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_fd_4_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_fd_5_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_fd_1_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_fd_2_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_fd_3_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_fd_4_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    def_fd_5_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_og_1_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),

    cac_og_2_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_og_3_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_og_4_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_og_5_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_og_1_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_og_2_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_og_3_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_og_4_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_og_5_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_fg_1_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_fg_2_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),

    cac_fg_3_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_fg_4_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_fg_5_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_fg_1_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_fg_2_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_fg_3_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_fg_4_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_fg_5_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_od_1_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_od_2_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),

    cac_od_3_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_od_4_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_od_5_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_od_1_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_od_2_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_od_3_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_od_4_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_od_5_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_fd_1_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_fd_2_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),

    cac_fd_3_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_fd_4_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_fd_5_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_fd_1_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_fd_2_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_fd_3_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_fd_4_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    cac_fd_5_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    gj_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    gj_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    hits_by_fighter1: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    hits_by_fighter2: Yup.number()
        .required('Ce champ est obligatoire')
        .min(0, 'La valeur ne doit pas être inférieure à 0'),
    round_winner_id: Yup.number().required('Ce champ est obligatoire'),
})

export default validationRoundSchema
