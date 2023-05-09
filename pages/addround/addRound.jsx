import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import { Box, Button, TextField } from '@mui/material'
import validationRoundSchema from 'components/fights/validationRoundSchema'
import Scoreboard from './scoreBoard'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import IconButton from '@mui/material/IconButton'

import { Layout } from 'components/fights'
import {
    fightService,
    alertService,
    roundService,
    fighterService,
} from 'services'

Modal.setAppElement('#__next')

export default AddRound

const IncrementDecrementField = ({ value, onChange }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                justifyContent: 'space-between',
            }}
        >
            <TextField
                value={value}
                onChange={(event) => onChange(event.target.value)}
                margin="small"
                label=""
                name=""
                id="password"
                autoFocus
                InputProps={{
                    sx: {
                        display: 'flex',
                        flexDirection: 'column-reverse',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.5rem',
                    },
                    startAdornment: (
                        <IconButton
                            onClick={() => onChange(value - 1)}
                            size="small"
                            sx={{ color: '#1976d2' }}
                        >
                            <RemoveIcon fontSize="small" />
                        </IconButton>
                    ),
                    endAdornment: (
                        <IconButton
                            onClick={() => onChange(value + 1)}
                            size="small"
                            sx={{ color: '#1976d2' }}
                        >
                            <AddIcon fontSize="small" />
                        </IconButton>
                    ),
                }}
            />
        </Box>
    )
}

function AddRound() {
    const router = useRouter()
    const [att_og_1_by_fighter1, setAtt_og_1_by_fighter1] = useState(0)
    const [att_og_2_by_fighter1, setAtt_og_2_by_fighter1] = useState(0)
    const [att_og_3_by_fighter1, setAtt_og_3_by_fighter1] = useState(0)
    const [att_og_4_by_fighter1, setAtt_og_4_by_fighter1] = useState(0)
    const [att_og_5_by_fighter1, setAtt_og_5_by_fighter1] = useState(0)
    const [att_og_1_by_fighter2, setAtt_og_1_by_fighter2] = useState(0)
    const [att_og_2_by_fighter2, setAtt_og_2_by_fighter2] = useState(0)
    const [att_og_3_by_fighter2, setAtt_og_3_by_fighter2] = useState(0)
    const [att_og_4_by_fighter2, setAtt_og_4_by_fighter2] = useState(0)
    const [att_og_5_by_fighter2, setAtt_og_5_by_fighter2] = useState(0)
    const [att_od_1_by_fighter1, setAtt_od_1_by_fighter1] = useState(0)
    const [att_od_2_by_fighter1, setAtt_od_2_by_fighter1] = useState(0)
    const [att_od_3_by_fighter1, setAtt_od_3_by_fighter1] = useState(0)
    const [att_od_4_by_fighter1, setAtt_od_4_by_fighter1] = useState(0)
    const [att_od_5_by_fighter1, setAtt_od_5_by_fighter1] = useState(0)
    const [att_od_1_by_fighter2, setAtt_od_1_by_fighter2] = useState(0)
    const [att_od_2_by_fighter2, setAtt_od_2_by_fighter2] = useState(0)
    const [att_od_3_by_fighter2, setAtt_od_3_by_fighter2] = useState(0)
    const [att_od_4_by_fighter2, setAtt_od_4_by_fighter2] = useState(0)
    const [att_od_5_by_fighter2, setAtt_od_5_by_fighter2] = useState(0)
    const [att_fg_1_by_fighter1, setAtt_fg_1_by_fighter1] = useState(0)
    const [att_fg_2_by_fighter1, setAtt_fg_2_by_fighter1] = useState(0)
    const [att_fg_3_by_fighter1, setAtt_fg_3_by_fighter1] = useState(0)
    const [att_fg_4_by_fighter1, setAtt_fg_4_by_fighter1] = useState(0)
    const [att_fg_5_by_fighter1, setAtt_fg_5_by_fighter1] = useState(0)
    const [att_fg_1_by_fighter2, setAtt_fg_1_by_fighter2] = useState(0)
    const [att_fg_2_by_fighter2, setAtt_fg_2_by_fighter2] = useState(0)
    const [att_fg_3_by_fighter2, setAtt_fg_3_by_fighter2] = useState(0)
    const [att_fg_4_by_fighter2, setAtt_fg_4_by_fighter2] = useState(0)
    const [att_fg_5_by_fighter2, setAtt_fg_5_by_fighter2] = useState(0)
    const [att_fd_1_by_fighter1, setAtt_fd_1_by_fighter1] = useState(0)
    const [att_fd_2_by_fighter1, setAtt_fd_2_by_fighter1] = useState(0)
    const [att_fd_3_by_fighter1, setAtt_fd_3_by_fighter1] = useState(0)
    const [att_fd_4_by_fighter1, setAtt_fd_4_by_fighter1] = useState(0)
    const [att_fd_5_by_fighter1, setAtt_fd_5_by_fighter1] = useState(0)
    const [att_fd_1_by_fighter2, setAtt_fd_1_by_fighter2] = useState(0)
    const [att_fd_2_by_fighter2, setAtt_fd_2_by_fighter2] = useState(0)
    const [att_fd_3_by_fighter2, setAtt_fd_3_by_fighter2] = useState(0)
    const [att_fd_4_by_fighter2, setAtt_fd_4_by_fighter2] = useState(0)
    const [att_fd_5_by_fighter2, setAtt_fd_5_by_fighter2] = useState(0)
    const [def_og_1_by_fighter1, setDef_og_1_by_fighter1] = useState(0)
    const [def_og_2_by_fighter1, setDef_og_2_by_fighter1] = useState(0)
    const [def_og_3_by_fighter1, setDef_og_3_by_fighter1] = useState(0)
    const [def_og_4_by_fighter1, setDef_og_4_by_fighter1] = useState(0)
    const [def_og_5_by_fighter1, setDef_og_5_by_fighter1] = useState(0)
    const [def_og_1_by_fighter2, setDef_og_1_by_fighter2] = useState(0)
    const [def_og_2_by_fighter2, setDef_og_2_by_fighter2] = useState(0)
    const [def_og_3_by_fighter2, setDef_og_3_by_fighter2] = useState(0)
    const [def_og_4_by_fighter2, setDef_og_4_by_fighter2] = useState(0)
    const [def_og_5_by_fighter2, setDef_og_5_by_fighter2] = useState(0)
    const [def_od_1_by_fighter1, setDef_od_1_by_fighter1] = useState(0)
    const [def_od_2_by_fighter1, setDef_od_2_by_fighter1] = useState(0)
    const [def_od_3_by_fighter1, setDef_od_3_by_fighter1] = useState(0)
    const [def_od_4_by_fighter1, setDef_od_4_by_fighter1] = useState(0)
    const [def_od_5_by_fighter1, setDef_od_5_by_fighter1] = useState(0)
    const [def_od_1_by_fighter2, setDef_od_1_by_fighter2] = useState(0)
    const [def_od_2_by_fighter2, setDef_od_2_by_fighter2] = useState(0)
    const [def_od_3_by_fighter2, setDef_od_3_by_fighter2] = useState(0)
    const [def_od_4_by_fighter2, setDef_od_4_by_fighter2] = useState(0)
    const [def_od_5_by_fighter2, setDef_od_5_by_fighter2] = useState(0)
    const [def_fg_1_by_fighter1, setDef_fg_1_by_fighter1] = useState(0)
    const [def_fg_2_by_fighter1, setDef_fg_2_by_fighter1] = useState(0)
    const [def_fg_3_by_fighter1, setDef_fg_3_by_fighter1] = useState(0)
    const [def_fg_4_by_fighter1, setDef_fg_4_by_fighter1] = useState(0)
    const [def_fg_5_by_fighter1, setDef_fg_5_by_fighter1] = useState(0)
    const [def_fg_1_by_fighter2, setDef_fg_1_by_fighter2] = useState(0)
    const [def_fg_2_by_fighter2, setDef_fg_2_by_fighter2] = useState(0)
    const [def_fg_3_by_fighter2, setDef_fg_3_by_fighter2] = useState(0)
    const [def_fg_4_by_fighter2, setDef_fg_4_by_fighter2] = useState(0)
    const [def_fg_5_by_fighter2, setDef_fg_5_by_fighter2] = useState(0)
    const [def_fd_1_by_fighter1, setDef_fd_1_by_fighter1] = useState(0)
    const [def_fd_2_by_fighter1, setDef_fd_2_by_fighter1] = useState(0)
    const [def_fd_3_by_fighter1, setDef_fd_3_by_fighter1] = useState(0)
    const [def_fd_4_by_fighter1, setDef_fd_4_by_fighter1] = useState(0)
    const [def_fd_5_by_fighter1, setDef_fd_5_by_fighter1] = useState(0)
    const [def_fd_1_by_fighter2, setDef_fd_1_by_fighter2] = useState(0)
    const [def_fd_2_by_fighter2, setDef_fd_2_by_fighter2] = useState(0)
    const [def_fd_3_by_fighter2, setDef_fd_3_by_fighter2] = useState(0)
    const [def_fd_4_by_fighter2, setDef_fd_4_by_fighter2] = useState(0)
    const [def_fd_5_by_fighter2, setDef_fd_5_by_fighter2] = useState(0)
    const [cac_og_1_by_fighter1, setCac_og_1_by_fighter1] = useState(0)
    const [cac_og_2_by_fighter1, setCac_og_2_by_fighter1] = useState(0)
    const [cac_og_3_by_fighter1, setCac_og_3_by_fighter1] = useState(0)
    const [cac_og_4_by_fighter1, setCac_og_4_by_fighter1] = useState(0)
    const [cac_og_5_by_fighter1, setCac_og_5_by_fighter1] = useState(0)
    const [cac_og_1_by_fighter2, setCac_og_1_by_fighter2] = useState(0)
    const [cac_og_2_by_fighter2, setCac_og_2_by_fighter2] = useState(0)
    const [cac_og_3_by_fighter2, setCac_og_3_by_fighter2] = useState(0)
    const [cac_og_4_by_fighter2, setCac_og_4_by_fighter2] = useState(0)
    const [cac_og_5_by_fighter2, setCac_og_5_by_fighter2] = useState(0)
    const [cac_od_1_by_fighter1, setCac_od_1_by_fighter1] = useState(0)
    const [cac_od_2_by_fighter1, setCac_od_2_by_fighter1] = useState(0)
    const [cac_od_3_by_fighter1, setCac_od_3_by_fighter1] = useState(0)
    const [cac_od_4_by_fighter1, setCac_od_4_by_fighter1] = useState(0)
    const [cac_od_5_by_fighter1, setCac_od_5_by_fighter1] = useState(0)
    const [cac_od_1_by_fighter2, setCac_od_1_by_fighter2] = useState(0)
    const [cac_od_2_by_fighter2, setCac_od_2_by_fighter2] = useState(0)
    const [cac_od_3_by_fighter2, setCac_od_3_by_fighter2] = useState(0)
    const [cac_od_4_by_fighter2, setCac_od_4_by_fighter2] = useState(0)
    const [cac_od_5_by_fighter2, setCac_od_5_by_fighter2] = useState(0)
    const [cac_fg_1_by_fighter1, setCac_fg_1_by_fighter1] = useState(0)
    const [cac_fg_2_by_fighter1, setCac_fg_2_by_fighter1] = useState(0)
    const [cac_fg_3_by_fighter1, setCac_fg_3_by_fighter1] = useState(0)
    const [cac_fg_4_by_fighter1, setCac_fg_4_by_fighter1] = useState(0)
    const [cac_fg_5_by_fighter1, setCac_fg_5_by_fighter1] = useState(0)
    const [cac_fg_1_by_fighter2, setCac_fg_1_by_fighter2] = useState(0)
    const [cac_fg_2_by_fighter2, setCac_fg_2_by_fighter2] = useState(0)
    const [cac_fg_3_by_fighter2, setCac_fg_3_by_fighter2] = useState(0)
    const [cac_fg_4_by_fighter2, setCac_fg_4_by_fighter2] = useState(0)
    const [cac_fg_5_by_fighter2, setCac_fg_5_by_fighter2] = useState(0)
    const [cac_fd_1_by_fighter1, setCac_fd_1_by_fighter1] = useState(0)
    const [cac_fd_2_by_fighter1, setCac_fd_2_by_fighter1] = useState(0)
    const [cac_fd_3_by_fighter1, setCac_fd_3_by_fighter1] = useState(0)
    const [cac_fd_4_by_fighter1, setCac_fd_4_by_fighter1] = useState(0)
    const [cac_fd_5_by_fighter1, setCac_fd_5_by_fighter1] = useState(0)
    const [cac_fd_1_by_fighter2, setCac_fd_1_by_fighter2] = useState(0)
    const [cac_fd_2_by_fighter2, setCac_fd_2_by_fighter2] = useState(0)
    const [cac_fd_3_by_fighter2, setCac_fd_3_by_fighter2] = useState(0)
    const [cac_fd_4_by_fighter2, setCac_fd_4_by_fighter2] = useState(0)
    const [cac_fd_5_by_fighter2, setCac_fd_5_by_fighter2] = useState(0)
    const [gj_by_fighter1, setGj_by_fighter1] = useState(0)
    const [gj_by_fighter2, setGj_by_fighter2] = useState(0)
    const [hits_by_fighter1, setHits_by_fighter1] = useState(0)
    const [hits_by_fighter2, setHits_by_fighter2] = useState(0)
    const [round_winner_id, setRound_winner_id] = useState('')
    console.log('round_winner_id', round_winner_id)

    const [blueScore, setBlueScore] = useState(0)
    const [redScore, setRedScore] = useState(0)
    console.log('blueScore', blueScore)
    console.log('redScore', redScore)

    const [state, setState] = useState({
        /* initial state */
    })
    const [state2, setState2] = useState({
        /* initial state */
    })

    const getIncrementValue = (key) => {
        const prefix = key.split('_')[1]
        return parseInt(prefix.slice(-1), 10)
    }

    const relevantKeys2 = Object.keys(state).filter(
        (key) =>
            (key.startsWith('att_og_') ||
                key.startsWith('att_fg_') ||
                key.startsWith('att_od_') ||
                key.startsWith('att_fd_') ||
                key.startsWith('def_og_') ||
                key.startsWith('def_fg_') ||
                key.startsWith('def_od_') ||
                key.startsWith('def_fd_') ||
                key.startsWith('cac_og_') ||
                key.startsWith('cac_fg_') ||
                key.startsWith('cac_od_') ||
                key.startsWith('cac_fd_')) &&
            key.endsWith('by_fighter2'),
    )
    console.log('relevantKeys2', relevantKeys2)
    useEffect(() => {
        const relevantKeys = Object.keys(state).filter(
            (key) =>
                (key.startsWith('att_og_') ||
                    key.startsWith('att_fg_') ||
                    key.startsWith('att_od_') ||
                    key.startsWith('att_fd_') ||
                    key.startsWith('def_og_') ||
                    key.startsWith('def_fg_') ||
                    key.startsWith('def_od_') ||
                    key.startsWith('def_fd_') ||
                    key.startsWith('cac_og_') ||
                    key.startsWith('cac_fg_') ||
                    key.startsWith('cac_od_') ||
                    key.startsWith('cac_fd_')) &&
                key.endsWith('by_fighter1'),
        )
        console.log('relevantKeys', relevantKeys)

        const updateBlueScore = (key, oldValue, newValue) => {
            const incrementValue = getIncrementValue(key)
            if (newValue > oldValue) {
                setBlueScore((prevScore) => prevScore + incrementValue)
            } else if (newValue < oldValue) {
                setBlueScore((prevScore) => prevScore - incrementValue)
            }
        }

        relevantKeys.forEach((key) => {
            const oldValue = state[key]
            const newValue = prevState[key]
            if (oldValue !== newValue) {
                updateBlueScore(key, oldValue, newValue)
            }
        })
    }, [state])
    useEffect(() => {
        const updateRedScore = (key, oldValue, newValue) => {
            const incrementValue = getIncrementValue(key)
            if (newValue > oldValue) {
                setRedScore((prevScore) => prevScore + incrementValue)
            } else if (newValue < oldValue) {
                setRedScore((prevScore) => prevScore - incrementValue)
            }
        }

        relevantKeys2.forEach((key) => {
            const oldValue = state2[key]
            const newValue = prevState[key]
            if (oldValue !== newValue) {
                updateRedScore(key, oldValue, newValue)
            }
        })
    }, [state2])

    const fightId = router.query.fightId

    //get fighters from api
    const [fighters, setFighters] = useState([])
    const [roundCount, setRoundCount] = useState(0)

    useEffect(() => {
        if (fightId) {
            fightService.getById(fightId).then((fight) => {
                setFighters([fight.fighter1_id, fight.fighter2_id])
            })

            roundService.getRoundCountByFightId(fightId).then((count) => {
                setRoundCount(count)
            })
        }
    }, [fightId])
    //get firstname and lastname from api for each fighter
    const [fighter1, setFighter1] = useState([])
    console.log('fighter1', fighter1)

    const [fighter2, setFighter2] = useState([])
    console.log('fighter2', fighter2)
    useEffect(() => {
        if (fighters.length > 0) {
            fighterService.getById(fighters[0]).then((fighter) => {
                setFighter1(fighter)
            })
            fighterService.getById(fighters[1]).then((fighter) => {
                setFighter2(fighter)
            })
        }
    }, [fighters])

    const [isModalOpen, setIsModalOpen] = useState(false)

    function onSubmit(event) {
        event.preventDefault()

        const round = {
            fight: fightId,
            round: roundCount + 1,
            att_fd_1_by_fighter1: att_fd_1_by_fighter1,
            att_fd_2_by_fighter1: att_fd_2_by_fighter1,
            att_fd_3_by_fighter1: att_fd_3_by_fighter1,
            att_fd_4_by_fighter1: att_fd_4_by_fighter1,
            att_fd_5_by_fighter1: att_fd_5_by_fighter1,
            att_fd_1_by_fighter2: att_fd_1_by_fighter2,
            att_fd_2_by_fighter2: att_fd_2_by_fighter2,
            att_fd_3_by_fighter2: att_fd_3_by_fighter2,
            att_fd_4_by_fighter2: att_fd_4_by_fighter2,
            att_fd_5_by_fighter2: att_fd_5_by_fighter2,
            att_fg_1_by_fighter1: att_fg_1_by_fighter1,
            att_fg_2_by_fighter1: att_fg_2_by_fighter1,
            att_fg_3_by_fighter1: att_fg_3_by_fighter1,
            att_fg_4_by_fighter1: att_fg_4_by_fighter1,
            att_fg_5_by_fighter1: att_fg_5_by_fighter1,
            att_fg_1_by_fighter2: att_fg_1_by_fighter2,
            att_fg_2_by_fighter2: att_fg_2_by_fighter2,
            att_fg_3_by_fighter2: att_fg_3_by_fighter2,
            att_fg_4_by_fighter2: att_fg_4_by_fighter2,
            att_fg_5_by_fighter2: att_fg_5_by_fighter2,
            att_od_1_by_fighter1: att_od_1_by_fighter1,
            att_od_2_by_fighter1: att_od_2_by_fighter1,
            att_od_3_by_fighter1: att_od_3_by_fighter1,
            att_od_4_by_fighter1: att_od_4_by_fighter1,
            att_od_5_by_fighter1: att_od_5_by_fighter1,
            att_od_1_by_fighter2: att_od_1_by_fighter2,
            att_od_2_by_fighter2: att_od_2_by_fighter2,
            att_od_3_by_fighter2: att_od_3_by_fighter2,
            att_od_4_by_fighter2: att_od_4_by_fighter2,
            att_od_5_by_fighter2: att_od_5_by_fighter2,
            att_og_1_by_fighter1: att_og_1_by_fighter1,
            att_og_2_by_fighter1: att_og_2_by_fighter1,
            att_og_3_by_fighter1: att_og_3_by_fighter1,
            att_og_4_by_fighter1: att_og_4_by_fighter1,
            att_og_5_by_fighter1: att_og_5_by_fighter1,
            att_og_1_by_fighter2: att_og_1_by_fighter2,
            att_og_2_by_fighter2: att_og_2_by_fighter2,
            att_og_3_by_fighter2: att_og_3_by_fighter2,
            att_og_4_by_fighter2: att_og_4_by_fighter2,
            att_og_5_by_fighter2: att_og_5_by_fighter2,
            def_fd_1_by_fighter1: def_fd_1_by_fighter1,
            def_fd_2_by_fighter1: def_fd_2_by_fighter1,
            def_fd_3_by_fighter1: def_fd_3_by_fighter1,
            def_fd_4_by_fighter1: def_fd_4_by_fighter1,
            def_fd_5_by_fighter1: def_fd_5_by_fighter1,
            def_fd_1_by_fighter2: def_fd_1_by_fighter2,
            def_fd_2_by_fighter2: def_fd_2_by_fighter2,
            def_fd_3_by_fighter2: def_fd_3_by_fighter2,
            def_fd_4_by_fighter2: def_fd_4_by_fighter2,
            def_fd_5_by_fighter2: def_fd_5_by_fighter2,
            def_fg_1_by_fighter1: def_fg_1_by_fighter1,
            def_fg_2_by_fighter1: def_fg_2_by_fighter1,
            def_fg_3_by_fighter1: def_fg_3_by_fighter1,
            def_fg_4_by_fighter1: def_fg_4_by_fighter1,
            def_fg_5_by_fighter1: def_fg_5_by_fighter1,
            def_fg_1_by_fighter2: def_fg_1_by_fighter2,
            def_fg_2_by_fighter2: def_fg_2_by_fighter2,
            def_fg_3_by_fighter2: def_fg_3_by_fighter2,
            def_fg_4_by_fighter2: def_fg_4_by_fighter2,
            def_fg_5_by_fighter2: def_fg_5_by_fighter2,
            def_od_1_by_fighter1: def_od_1_by_fighter1,
            def_od_2_by_fighter1: def_od_2_by_fighter1,
            def_od_3_by_fighter1: def_od_3_by_fighter1,
            def_od_4_by_fighter1: def_od_4_by_fighter1,
            def_od_5_by_fighter1: def_od_5_by_fighter1,
            def_od_1_by_fighter2: def_od_1_by_fighter2,
            def_od_2_by_fighter2: def_od_2_by_fighter2,
            def_od_3_by_fighter2: def_od_3_by_fighter2,
            def_od_4_by_fighter2: def_od_4_by_fighter2,
            def_od_5_by_fighter2: def_od_5_by_fighter2,
            def_og_1_by_fighter1: def_og_1_by_fighter1,
            def_og_2_by_fighter1: def_og_2_by_fighter1,
            def_og_3_by_fighter1: def_og_3_by_fighter1,
            def_og_4_by_fighter1: def_og_4_by_fighter1,
            def_og_5_by_fighter1: def_og_5_by_fighter1,
            def_og_1_by_fighter2: def_og_1_by_fighter2,
            def_og_2_by_fighter2: def_og_2_by_fighter2,
            def_og_3_by_fighter2: def_og_3_by_fighter2,
            def_og_4_by_fighter2: def_og_4_by_fighter2,
            def_og_5_by_fighter2: def_og_5_by_fighter2,
            cac_fd_1_by_fighter1: cac_fd_1_by_fighter1,
            cac_fd_2_by_fighter1: cac_fd_2_by_fighter1,
            cac_fd_3_by_fighter1: cac_fd_3_by_fighter1,
            cac_fd_4_by_fighter1: cac_fd_4_by_fighter1,
            cac_fd_5_by_fighter1: cac_fd_5_by_fighter1,
            cac_fd_1_by_fighter2: cac_fd_1_by_fighter2,
            cac_fd_2_by_fighter2: cac_fd_2_by_fighter2,
            cac_fd_3_by_fighter2: cac_fd_3_by_fighter2,
            cac_fd_4_by_fighter2: cac_fd_4_by_fighter2,
            cac_fd_5_by_fighter2: cac_fd_5_by_fighter2,
            cac_fg_1_by_fighter1: cac_fg_1_by_fighter1,
            cac_fg_2_by_fighter1: cac_fg_2_by_fighter1,
            cac_fg_3_by_fighter1: cac_fg_3_by_fighter1,
            cac_fg_4_by_fighter1: cac_fg_4_by_fighter1,
            cac_fg_5_by_fighter1: cac_fg_5_by_fighter1,
            cac_fg_1_by_fighter2: cac_fg_1_by_fighter2,
            cac_fg_2_by_fighter2: cac_fg_2_by_fighter2,
            cac_fg_3_by_fighter2: cac_fg_3_by_fighter2,
            cac_fg_4_by_fighter2: cac_fg_4_by_fighter2,
            cac_fg_5_by_fighter2: cac_fg_5_by_fighter2,
            cac_od_1_by_fighter1: cac_od_1_by_fighter1,
            cac_od_2_by_fighter1: cac_od_2_by_fighter1,
            cac_od_3_by_fighter1: cac_od_3_by_fighter1,
            cac_od_4_by_fighter1: cac_od_4_by_fighter1,
            cac_od_5_by_fighter1: cac_od_5_by_fighter1,
            cac_od_1_by_fighter2: cac_od_1_by_fighter2,
            cac_od_2_by_fighter2: cac_od_2_by_fighter2,
            cac_od_3_by_fighter2: cac_od_3_by_fighter2,
            cac_od_4_by_fighter2: cac_od_4_by_fighter2,
            cac_od_5_by_fighter2: cac_od_5_by_fighter2,
            cac_og_1_by_fighter1: cac_og_1_by_fighter1,
            cac_og_2_by_fighter1: cac_og_2_by_fighter1,
            cac_og_3_by_fighter1: cac_og_3_by_fighter1,
            cac_og_4_by_fighter1: cac_og_4_by_fighter1,
            cac_og_5_by_fighter1: cac_og_5_by_fighter1,
            cac_og_1_by_fighter2: cac_og_1_by_fighter2,
            cac_og_2_by_fighter2: cac_og_2_by_fighter2,
            cac_og_3_by_fighter2: cac_og_3_by_fighter2,
            cac_og_4_by_fighter2: cac_og_4_by_fighter2,
            cac_og_5_by_fighter2: cac_og_5_by_fighter2,
            gj_by_fighter1: gj_by_fighter1,
            gj_by_fighter2: gj_by_fighter2,
            hits_by_fighter1: hits_by_fighter1,
            hits_by_fighter2: hits_by_fighter2,
            round_winner_id: round_winner_id,
        }
        return roundService
            .createRound(round)
            .then(() => {
                alertService.success('Round added successfully', true)
                router.push('/fights')
            })

            .catch(alertService.error)
    }

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    return (
        <Layout>
            <button onClick={openModal} className="btn btn-primary">
                Add Round
            </button>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Add Fight"
            >
                <h4 className="card-header">Add Fight</h4>
                <div className="flex flex-col form-group">
                    <label>Fighter Blue</label>
                    <p>
                        {fighter1.firstName} {fighter1.lastName}
                    </p>
                    <label>Fighter Red</label>
                    <p>
                        {fighter2.firstName} {fighter2.lastName}
                    </p>
                    <label>Round</label>

                    <p>{roundCount + 1}</p>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="grid grid-cols-9 grid-rows-11 gap-4 border-1 text-center border-double border-red-600">
                        <div className="text-center  border-red-600">
                            Round:{roundCount + 1}
                        </div>
                        <div className="col-span-8 text-center">ATTAQUE</div>
                        <div className="row-start-2">GARDE</div>
                        <div className="col-span-2 row-start-2">
                            OUVERTE DROITE
                        </div>
                        <div className="border-simple col-span-2 col-start-4 row-start-2">
                            FERMEE DROITE
                        </div>
                        <div className="col-span-2 col-start-6 row-start-2">
                            OUVERTE GAUCHE
                        </div>
                        <div className="col-span-2 col-start-8 row-start-2">
                            FERMEE GAUCHE
                        </div>
                        <div className="row-start-3">FIGHTER</div>
                        <div className="row-start-3">BLUE</div>
                        <div className="row-start-3">RED</div>
                        <div className="row-start-3">BLUE</div>
                        <div className="row-start-3">RED</div>
                        <div className="row-start-3">BLUE</div>
                        <div className="row-start-3">RED</div>
                        <div className="row-start-3">BLUE</div>
                        <div className="row-start-3">RED</div>
                        <div>
                            <IncrementDecrementField
                                value={att_fg_1_by_fighter1}
                                onChange={(value) =>
                                    setAtt_fg_1_by_fighter1(value)
                                }
                            />
                        </div>
                        <div>
                            <IncrementDecrementField
                                value={att_fg_1_by_fighter2}
                                onChange={(value) =>
                                    setAtt_fg_1_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-4">1 POINTS</div>
                        <div className="row-start-4">
                            <IncrementDecrementField
                                value={att_od_1_by_fighter1}
                                onChange={(value) =>
                                    setAtt_od_1_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-4">
                            <IncrementDecrementField
                                value={att_od_1_by_fighter2}
                                onChange={(value) =>
                                    setAtt_od_1_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-4">
                            <IncrementDecrementField
                                value={att_fd_1_by_fighter1}
                                onChange={(value) =>
                                    setAtt_fd_1_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-4">
                            <IncrementDecrementField
                                value={att_fd_1_by_fighter2}
                                onChange={(value) =>
                                    setAtt_fd_1_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-4">
                            <IncrementDecrementField
                                value={att_og_1_by_fighter1}
                                onChange={(value) =>
                                    setAtt_og_1_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-4">
                            <IncrementDecrementField
                                value={att_og_1_by_fighter2}
                                onChange={(value) =>
                                    setAtt_og_1_by_fighter2(value)
                                }
                            />
                        </div>
                        <div>
                            <IncrementDecrementField
                                value={att_fg_2_by_fighter1}
                                onChange={(value) =>
                                    setAtt_fg_2_by_fighter1(value)
                                }
                            />
                        </div>
                        <div>
                            <IncrementDecrementField
                                value={att_fg_2_by_fighter2}
                                onChange={(value) =>
                                    setAtt_fg_2_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-5">2 POINTS</div>
                        <div className="row-start-5">
                            {' '}
                            <IncrementDecrementField
                                value={att_od_2_by_fighter1}
                                onChange={(value) =>
                                    setAtt_od_2_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-5">
                            <IncrementDecrementField
                                value={att_od_2_by_fighter2}
                                onChange={(value) =>
                                    setAtt_od_2_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-5">
                            <IncrementDecrementField
                                value={att_fd_2_by_fighter1}
                                onChange={(value) =>
                                    setAtt_fd_2_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-5">
                            <IncrementDecrementField
                                value={att_fd_2_by_fighter2}
                                onChange={(value) =>
                                    setAtt_fd_2_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-5">
                            <IncrementDecrementField
                                value={att_og_2_by_fighter1}
                                onChange={(value) =>
                                    setAtt_og_2_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-5">
                            <IncrementDecrementField
                                value={att_og_2_by_fighter2}
                                onChange={(value) =>
                                    setAtt_og_2_by_fighter2(value)
                                }
                            />
                        </div>
                        <div>
                            <IncrementDecrementField
                                value={att_fg_3_by_fighter1}
                                onChange={(value) =>
                                    setAtt_fg_3_by_fighter1(value)
                                }
                            />
                        </div>
                        <div>
                            <IncrementDecrementField
                                value={att_fg_3_by_fighter2}
                                onChange={(value) =>
                                    setAtt_fg_3_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-6">3 POINTS</div>
                        <div className="row-start-6">
                            <IncrementDecrementField
                                value={att_od_3_by_fighter1}
                                onChange={(value) =>
                                    setAtt_od_3_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-6">
                            <IncrementDecrementField
                                value={att_od_3_by_fighter2}
                                onChange={(value) =>
                                    setAtt_od_3_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-6">
                            <IncrementDecrementField
                                value={att_fd_3_by_fighter1}
                                onChange={(value) =>
                                    setAtt_fd_3_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-6">
                            <IncrementDecrementField
                                value={att_fd_3_by_fighter2}
                                onChange={(value) =>
                                    setAtt_fd_3_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-6">
                            <IncrementDecrementField
                                value={att_og_3_by_fighter1}
                                onChange={(value) =>
                                    setAtt_og_3_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-6">
                            <IncrementDecrementField
                                value={att_og_3_by_fighter2}
                                onChange={(value) =>
                                    setAtt_og_3_by_fighter2(value)
                                }
                            />
                        </div>
                        <div>
                            <IncrementDecrementField
                                value={att_fg_4_by_fighter1}
                                onChange={(value) =>
                                    setAtt_fg_4_by_fighter1(value)
                                }
                            />
                        </div>
                        <div>
                            <IncrementDecrementField
                                value={att_fg_4_by_fighter2}
                                onChange={(value) =>
                                    setAtt_fg_4_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-7">4 POINTS</div>
                        <div className="row-start-7">
                            <IncrementDecrementField
                                value={att_od_4_by_fighter1}
                                onChange={(value) =>
                                    setAtt_od_4_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-7">
                            <IncrementDecrementField
                                value={att_od_4_by_fighter2}
                                onChange={(value) =>
                                    setAtt_od_4_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-7">
                            <IncrementDecrementField
                                value={att_fd_4_by_fighter1}
                                onChange={(value) =>
                                    setAtt_fd_4_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-7">
                            <IncrementDecrementField
                                value={att_fd_4_by_fighter2}
                                onChange={(value) =>
                                    setAtt_fd_4_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-7">
                            <IncrementDecrementField
                                value={att_og_4_by_fighter1}
                                onChange={(value) =>
                                    setAtt_og_4_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-7">
                            <IncrementDecrementField
                                value={att_og_4_by_fighter2}
                                onChange={(value) =>
                                    setAtt_og_4_by_fighter2(value)
                                }
                            />
                        </div>
                        <div>5 POINTS</div>
                        <div>
                            <IncrementDecrementField
                                value={att_od_5_by_fighter1}
                                onChange={(value) =>
                                    setAtt_od_5_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-8">
                            <IncrementDecrementField
                                value={att_od_5_by_fighter2}
                                onChange={(value) =>
                                    setAtt_od_5_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-8">
                            <IncrementDecrementField
                                value={att_fd_5_by_fighter1}
                                onChange={(value) =>
                                    setAtt_fd_5_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-8">
                            <IncrementDecrementField
                                value={att_fd_5_by_fighter2}
                                onChange={(value) =>
                                    setAtt_fd_5_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-8">
                            <IncrementDecrementField
                                value={att_og_5_by_fighter1}
                                onChange={(value) =>
                                    setAtt_og_5_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-8">
                            <IncrementDecrementField
                                value={att_og_5_by_fighter2}
                                onChange={(value) =>
                                    setAtt_og_5_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-8">
                            <IncrementDecrementField
                                value={att_fg_5_by_fighter1}
                                onChange={(value) =>
                                    setAtt_fg_5_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-8">
                            <IncrementDecrementField
                                value={att_fg_5_by_fighter2}
                                onChange={(value) =>
                                    setAtt_fg_5_by_fighter2(value)
                                }
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-9 grid-rows-11 gap-4 border-1 text-center border-double border-red-600">
                        <div className="text-center  border-red-600">ROUND</div>
                        <div className="col-span-8 text-center">DEFENSE</div>
                        <div className="row-start-2">GARDE</div>
                        <div className="col-span-2 row-start-2">
                            OUVERTE DROITE
                        </div>
                        <div className="border-simple col-span-2 col-start-4 row-start-2">
                            FERMEE DROITE
                        </div>
                        <div className="col-span-2 col-start-6 row-start-2">
                            OUVERTE GAUCHE
                        </div>
                        <div className="col-span-2 col-start-8 row-start-2">
                            FERMEE GAUCHE
                        </div>
                        <div className="row-start-3">FIGHTER</div>
                        <div className="row-start-3">BLUE</div>
                        <div className="row-start-3">RED</div>
                        <div className="row-start-3">BLUE</div>
                        <div className="row-start-3">RED</div>
                        <div className="row-start-3">BLUE</div>
                        <div className="row-start-3">RED</div>
                        <div className="row-start-3">BLUE</div>
                        <div className="row-start-3">RED</div>
                        <div>
                            <IncrementDecrementField
                                value={def_fg_1_by_fighter1}
                                onChange={(value) =>
                                    setDef_fg_1_by_fighter1(value)
                                }
                            />
                        </div>
                        <div>
                            <IncrementDecrementField
                                value={def_fg_1_by_fighter2}
                                onChange={(value) =>
                                    setDef_fg_1_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-4">1 POINTS</div>
                        <div className="row-start-4">
                            <IncrementDecrementField
                                value={def_od_1_by_fighter1}
                                onChange={(value) =>
                                    setDef_od_1_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-4">
                            <IncrementDecrementField
                                value={def_od_1_by_fighter2}
                                onChange={(value) =>
                                    setDef_od_1_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-4">
                            <IncrementDecrementField
                                value={def_fd_1_by_fighter1}
                                onChange={(value) =>
                                    setDef_fd_1_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-4">
                            <IncrementDecrementField
                                value={def_fd_1_by_fighter2}
                                onChange={(value) =>
                                    setDef_fd_1_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-4">
                            <IncrementDecrementField
                                value={def_og_1_by_fighter1}
                                onChange={(value) =>
                                    setDef_og_1_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-4">
                            <IncrementDecrementField
                                value={def_og_1_by_fighter2}
                                onChange={(value) =>
                                    setDef_og_1_by_fighter2(value)
                                }
                            />
                        </div>
                        <div>
                            <IncrementDecrementField
                                value={def_fg_2_by_fighter1}
                                onChange={(value) =>
                                    setDef_fg_2_by_fighter1(value)
                                }
                            />
                        </div>
                        <div>
                            <IncrementDecrementField
                                value={def_fg_2_by_fighter2}
                                onChange={(value) =>
                                    setDef_fg_2_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-5">2 POINTS</div>
                        <div className="row-start-5">
                            {' '}
                            <IncrementDecrementField
                                value={def_od_2_by_fighter1}
                                onChange={(value) =>
                                    setDef_od_2_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-5">
                            <IncrementDecrementField
                                value={def_od_2_by_fighter2}
                                onChange={(value) =>
                                    setDef_od_2_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-5">
                            <IncrementDecrementField
                                value={def_fd_2_by_fighter1}
                                onChange={(value) =>
                                    setDef_fd_2_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-5">
                            <IncrementDecrementField
                                value={def_fd_2_by_fighter2}
                                onChange={(value) =>
                                    setDef_fd_2_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-5">
                            <IncrementDecrementField
                                value={def_og_2_by_fighter1}
                                onChange={(value) =>
                                    setDef_og_2_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-5">
                            <IncrementDecrementField
                                value={def_og_2_by_fighter2}
                                onChange={(value) =>
                                    setDef_og_2_by_fighter2(value)
                                }
                            />
                        </div>
                        <div>
                            <IncrementDecrementField
                                value={def_fg_3_by_fighter1}
                                onChange={(value) =>
                                    setDef_fg_3_by_fighter1(value)
                                }
                            />
                        </div>
                        <div>
                            <IncrementDecrementField
                                value={def_fg_3_by_fighter2}
                                onChange={(value) =>
                                    setDef_fg_3_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-6">3 POINTS</div>
                        <div className="row-start-6">
                            <IncrementDecrementField
                                value={def_od_3_by_fighter1}
                                onChange={(value) =>
                                    setDef_od_3_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-6">
                            <IncrementDecrementField
                                value={def_od_3_by_fighter2}
                                onChange={(value) =>
                                    setDef_od_3_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-6">
                            <IncrementDecrementField
                                value={def_fd_3_by_fighter1}
                                onChange={(value) =>
                                    setDef_fd_3_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-6">
                            <IncrementDecrementField
                                value={def_fd_3_by_fighter2}
                                onChange={(value) =>
                                    setDef_fd_3_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-6">
                            <IncrementDecrementField
                                value={def_og_3_by_fighter1}
                                onChange={(value) =>
                                    setDef_og_3_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-6">
                            <IncrementDecrementField
                                value={def_og_3_by_fighter2}
                                onChange={(value) =>
                                    setDef_og_3_by_fighter2(value)
                                }
                            />
                        </div>
                        <div>
                            <IncrementDecrementField
                                value={def_fg_4_by_fighter1}
                                onChange={(value) =>
                                    setDef_fg_4_by_fighter1(value)
                                }
                            />
                        </div>
                        <div>
                            <IncrementDecrementField
                                value={def_fg_4_by_fighter2}
                                onChange={(value) =>
                                    setDef_fg_4_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-7">4 POINTS</div>
                        <div className="row-start-7">
                            <IncrementDecrementField
                                value={def_od_4_by_fighter1}
                                onChange={(value) =>
                                    setDef_od_4_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-7">
                            <IncrementDecrementField
                                value={def_od_4_by_fighter2}
                                onChange={(value) =>
                                    setDef_od_4_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-7">
                            <IncrementDecrementField
                                value={def_fd_4_by_fighter1}
                                onChange={(value) =>
                                    setDef_fd_4_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-7">
                            <IncrementDecrementField
                                value={def_fd_4_by_fighter2}
                                onChange={(value) =>
                                    setDef_fd_4_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-7">
                            <IncrementDecrementField
                                value={def_og_4_by_fighter1}
                                onChange={(value) =>
                                    setDef_og_4_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-7">
                            <IncrementDecrementField
                                value={def_og_4_by_fighter2}
                                onChange={(value) =>
                                    setDef_og_4_by_fighter2(value)
                                }
                            />
                        </div>
                        <div>5 POINTS</div>
                        <div>
                            <IncrementDecrementField
                                value={def_od_5_by_fighter1}
                                onChange={(value) =>
                                    setDef_od_5_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-8">
                            <IncrementDecrementField
                                value={def_od_5_by_fighter2}
                                onChange={(value) =>
                                    setDef_od_5_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-8">
                            <IncrementDecrementField
                                value={def_fd_5_by_fighter1}
                                onChange={(value) =>
                                    setDef_fd_5_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-8">
                            <IncrementDecrementField
                                value={def_fd_5_by_fighter2}
                                onChange={(value) =>
                                    setDef_fd_5_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-8">
                            <IncrementDecrementField
                                value={def_og_5_by_fighter1}
                                onChange={(value) =>
                                    setDef_og_5_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-8">
                            <IncrementDecrementField
                                value={def_og_5_by_fighter2}
                                onChange={(value) =>
                                    setDef_og_5_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-8">
                            <IncrementDecrementField
                                value={def_fg_5_by_fighter1}
                                onChange={(value) =>
                                    setDef_fg_5_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-8">
                            <IncrementDecrementField
                                value={def_fg_5_by_fighter2}
                                onChange={(value) =>
                                    setDef_fg_5_by_fighter2(value)
                                }
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-9 grid-rows-11 gap-4 border-1 text-center border-double border-red-600">
                        <div className="text-center  border-red-600">ROUND</div>
                        <div className="col-span-8 text-center">CLINCH</div>
                        <div className="row-start-2">GARDE</div>
                        <div className="col-span-2 row-start-2">
                            OUVERTE DROITE
                        </div>
                        <div className="border-simple col-span-2 col-start-4 row-start-2">
                            FERMEE DROITE
                        </div>
                        <div className="col-span-2 col-start-6 row-start-2">
                            OUVERTE GAUCHE
                        </div>
                        <div className="col-span-2 col-start-8 row-start-2">
                            FERMEE GAUCHE
                        </div>
                        <div className="row-start-3">FIGHTER</div>
                        <div className="row-start-3">BLUE</div>
                        <div className="row-start-3">RED</div>
                        <div className="row-start-3">BLUE</div>
                        <div className="row-start-3">RED</div>
                        <div className="row-start-3">BLUE</div>
                        <div className="row-start-3">RED</div>
                        <div className="row-start-3">BLUE</div>
                        <div className="row-start-3">RED</div>
                        <div>
                            <IncrementDecrementField
                                value={cac_fg_1_by_fighter1}
                                onChange={(value) =>
                                    setCac_fg_1_by_fighter1(value)
                                }
                            />
                        </div>
                        <div>
                            <IncrementDecrementField
                                value={cac_fg_1_by_fighter2}
                                onChange={(value) =>
                                    setCac_fg_1_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-4">1 POINTS</div>
                        <div className="row-start-4">
                            <IncrementDecrementField
                                value={cac_od_1_by_fighter1}
                                onChange={(value) =>
                                    setCac_od_1_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-4">
                            <IncrementDecrementField
                                value={cac_od_1_by_fighter2}
                                onChange={(value) =>
                                    setCac_od_1_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-4">
                            <IncrementDecrementField
                                value={cac_fd_1_by_fighter1}
                                onChange={(value) =>
                                    setCac_fd_1_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-4">
                            <IncrementDecrementField
                                value={cac_fd_1_by_fighter2}
                                onChange={(value) =>
                                    setCac_fd_1_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-4">
                            <IncrementDecrementField
                                value={cac_og_1_by_fighter1}
                                onChange={(value) =>
                                    setCac_og_1_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-4">
                            <IncrementDecrementField
                                value={cac_og_1_by_fighter2}
                                onChange={(value) =>
                                    setCac_og_1_by_fighter2(value)
                                }
                            />
                        </div>
                        <div>
                            <IncrementDecrementField
                                value={cac_fg_2_by_fighter1}
                                onChange={(value) =>
                                    setCac_fg_2_by_fighter1(value)
                                }
                            />
                        </div>
                        <div>
                            <IncrementDecrementField
                                value={cac_fg_2_by_fighter2}
                                onChange={(value) =>
                                    setCac_fg_2_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-5">2 POINTS</div>
                        <div className="row-start-5">
                            {' '}
                            <IncrementDecrementField
                                value={cac_od_2_by_fighter1}
                                onChange={(value) =>
                                    setCac_od_2_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-5">
                            <IncrementDecrementField
                                value={cac_od_2_by_fighter2}
                                onChange={(value) =>
                                    setCac_od_2_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-5">
                            <IncrementDecrementField
                                value={cac_fd_2_by_fighter1}
                                onChange={(value) =>
                                    setCac_fd_2_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-5">
                            <IncrementDecrementField
                                value={cac_fd_2_by_fighter2}
                                onChange={(value) =>
                                    setCac_fd_2_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-5">
                            <IncrementDecrementField
                                value={cac_og_2_by_fighter1}
                                onChange={(value) =>
                                    setCac_og_2_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-5">
                            <IncrementDecrementField
                                value={cac_og_2_by_fighter2}
                                onChange={(value) =>
                                    setCac_og_2_by_fighter2(value)
                                }
                            />
                        </div>
                        <div>
                            <IncrementDecrementField
                                value={cac_fg_3_by_fighter1}
                                onChange={(value) =>
                                    setCac_fg_3_by_fighter1(value)
                                }
                            />
                        </div>
                        <div>
                            <IncrementDecrementField
                                value={cac_fg_3_by_fighter2}
                                onChange={(value) =>
                                    setCac_fg_3_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-6">3 POINTS</div>
                        <div className="row-start-6">
                            <IncrementDecrementField
                                value={cac_od_3_by_fighter1}
                                onChange={(value) =>
                                    setCac_od_3_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-6">
                            <IncrementDecrementField
                                value={cac_od_3_by_fighter2}
                                onChange={(value) =>
                                    setCac_od_3_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-6">
                            <IncrementDecrementField
                                value={cac_fd_3_by_fighter1}
                                onChange={(value) =>
                                    setCac_fd_3_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-6">
                            <IncrementDecrementField
                                value={cac_fd_3_by_fighter2}
                                onChange={(value) =>
                                    setCac_fd_3_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-6">
                            <IncrementDecrementField
                                value={cac_og_3_by_fighter1}
                                onChange={(value) =>
                                    setCac_og_3_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-6">
                            <IncrementDecrementField
                                value={cac_og_3_by_fighter2}
                                onChange={(value) =>
                                    setCac_og_3_by_fighter2(value)
                                }
                            />
                        </div>
                        <div>
                            <IncrementDecrementField
                                value={cac_fg_4_by_fighter1}
                                onChange={(value) =>
                                    setCac_fg_4_by_fighter1(value)
                                }
                            />
                        </div>
                        <div>
                            <IncrementDecrementField
                                value={cac_fg_4_by_fighter2}
                                onChange={(value) =>
                                    setCac_fg_4_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-7">4 POINTS</div>
                        <div className="row-start-7">
                            <IncrementDecrementField
                                value={cac_od_4_by_fighter1}
                                onChange={(value) =>
                                    setCac_od_4_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-7">
                            <IncrementDecrementField
                                value={cac_od_4_by_fighter2}
                                onChange={(value) =>
                                    setCac_od_4_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-7">
                            <IncrementDecrementField
                                value={cac_fd_4_by_fighter1}
                                onChange={(value) =>
                                    setCac_fd_4_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-7">
                            <IncrementDecrementField
                                value={cac_fd_4_by_fighter2}
                                onChange={(value) =>
                                    setCac_fd_4_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-7">
                            <IncrementDecrementField
                                value={cac_og_4_by_fighter1}
                                onChange={(value) =>
                                    setCac_og_4_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-7">
                            <IncrementDecrementField
                                value={cac_og_4_by_fighter2}
                                onChange={(value) =>
                                    setCac_og_4_by_fighter2(value)
                                }
                            />
                        </div>
                        <div>5 POINTS</div>
                        <div>
                            <IncrementDecrementField
                                value={cac_od_5_by_fighter1}
                                onChange={(value) =>
                                    setCac_od_5_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-8">
                            <IncrementDecrementField
                                value={cac_od_5_by_fighter2}
                                onChange={(value) =>
                                    setCac_od_5_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-8">
                            <IncrementDecrementField
                                value={cac_fd_5_by_fighter1}
                                onChange={(value) =>
                                    setCac_fd_5_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-8">
                            <IncrementDecrementField
                                value={cac_fd_5_by_fighter2}
                                onChange={(value) =>
                                    setCac_fd_5_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-8">
                            <IncrementDecrementField
                                value={cac_og_5_by_fighter1}
                                onChange={(value) =>
                                    setCac_og_5_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-8">
                            <IncrementDecrementField
                                value={cac_og_5_by_fighter2}
                                onChange={(value) =>
                                    setCac_og_5_by_fighter2(value)
                                }
                            />
                        </div>
                        <div className="row-start-8">
                            <IncrementDecrementField
                                value={cac_fg_5_by_fighter1}
                                onChange={(value) =>
                                    setCac_fg_5_by_fighter1(value)
                                }
                            />
                        </div>
                        <div className="row-start-8">
                            <IncrementDecrementField
                                value={cac_fg_5_by_fighter2}
                                onChange={(value) =>
                                    setCac_fg_5_by_fighter2(value)
                                }
                            />
                        </div>
                        <div>gj and hits</div>
                        <div className="col-span-2">gam jeon blue</div>
                        <div className="col-span-2 col-start-4 row-start-9">
                            gam jeon red
                        </div>
                        <div className="col-span-2 col-start-6 row-start-9">
                            hits blue
                        </div>
                        <div className="col-span-2 col-start-8 row-start-9">
                            hits red
                        </div>
                        <div className="row-start-10"></div>
                        <div className="col-span-2 row-start-10">
                            <IncrementDecrementField
                                value={gj_by_fighter1}
                                onChange={(value) => setGj_by_fighter1(value)}
                            />
                        </div>
                        <div className="col-span-2 col-start-4 row-start-10">
                            <IncrementDecrementField
                                value={gj_by_fighter2}
                                onChange={(value) => setGj_by_fighter2(value)}
                            />
                        </div>
                        <div className="col-span-2 col-start-6 row-start-10">
                            <IncrementDecrementField
                                value={hits_by_fighter1}
                                onChange={(value) => setHits_by_fighter1(value)}
                            />
                        </div>
                        <div className="col-span-2 col-start-8 row-start-10">
                            <IncrementDecrementField
                                value={hits_by_fighter2}
                                onChange={(value) => setHits_by_fighter2(value)}
                            />
                        </div>
                        <div className="row-start-11">ROUND WINNER</div>
                        <div className="col-span-8 row-start-11">
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                value={round_winner_id}
                                onChange={(event) =>
                                    setRound_winner_id(event.target.value)
                                }
                            >
                                <option value="0">Select Winner</option>
                                <option value={fighter1.id}>
                                    {fighter1.firstName} {fighter1.lastName}
                                </option>
                                <option value={fighter2.id}>
                                    {fighter2.firstName} {fighter2.lastName}
                                </option>
                            </select>
                        </div>
                    </div>

                    <button
                        // disabled={formState.isSubmitting}
                        className="btn btn-primary"
                    >
                        {/* {formState.isSubmitting && (
              <span className="spinner-border spinner-border-sm me-1"></span>
            )} */}
                        Add Round
                    </button>
                    <button onClick={closeModal} className="btn btn-link">
                        Cancel
                    </button>
                </form>
                <Scoreboard
                    redScore={redScore}
                    setRedScore={setRedScore}
                    blueScore={blueScore}
                    setBlueScore={setBlueScore}
                    gj_by_fighter1={gj_by_fighter1}
                    gj_by_fighter2={gj_by_fighter2}
                    hits_by_fighter1={hits_by_fighter1}
                    hits_by_fighter2={hits_by_fighter2}
                />
            </Modal>
        </Layout>
    )
}
