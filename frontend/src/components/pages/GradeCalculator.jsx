import React, {useState} from 'react'
import styled from "styled-components";
import {Button, ButtonGroup, Grid, TextField, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
const GradeCalculatorContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: antiquewhite;
`;

export default function GradeCalculator() {

  const [finalGrade, setFinalGrade] = useState('');
  const [finalGradeCalculateStr, setFinalGradeCalculateStr] = useState('');

  const [rows, setRows] = useState([
    {
      id: Date.now(),
      assignment: '',
      grade: '',
      weight: ''
    }
  ]);

  const handleClickAdd = () => {
    setRows([...rows, {
      id: Date.now(),
      assignment: '',
      grade: '',
      weight: ''
    }])
  }

  const handleClickCalculate = () => {
    let grade = 0;
    let gradeStrs = [];
    for (let i = 0; i < rows.length; i ++) {
      const row = rows[i];
      if (row.assignment.trim() && row.grade && row.weight) {
        grade += Number(row.grade) * (Number(row.weight) / 100);
        gradeStrs.push(String(row.grade) + ' X ' + String(row.weight) + '%');
      }
    }
    setFinalGrade(grade.toFixed(2));
    setFinalGradeCalculateStr(gradeStrs.join(' + '));
  }

  return (
    <GradeCalculatorContainer>
      <div className={'container'}>
        <Grid container spacing={2} className={'m-auto w-50 mt-5'}>
          <Grid item xs={6} className={'text-start'}>
            <Typography variant={'h6'}>
              Assignment(optional)
            </Typography>
          </Grid>
          <Grid item xs={3} className={'text-start'}>
            <Typography variant={'h6'}>
              Grade(%)
            </Typography>
          </Grid>
          <Grid item xs={3} className={'text-start'}>
            <Typography variant={'h6'}>
              Weight(%)
            </Typography>
          </Grid>
        </Grid>

        {rows.map(row => {
          return (
            <Grid key={row.id} container spacing={2} className={'m-auto w-50'}>
              <Grid item xs={6}>
                <TextField
                  value={row.assignment}
                  onChange={e => {
                    setRows(rows.map(rawRow => {
                      if (rawRow.id === row.id) {
                        rawRow.assignment = e.target.value;
                      }
                      return rawRow;
                    }))
                  }}
                  fullWidth className={'bg-white'} label={'Assignment or Homework or Exam'}/>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  value={row.grade}
                  onChange={e => {
                    setRows(rows.map(rawRow => {
                      if (rawRow.id === row.id) {
                        rawRow.grade = Number(e.target.value);
                      }
                      return rawRow;
                    }))
                  }}
                  type={'number'} fullWidth className={'bg-white'}/>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  value={row.weight}
                  onChange={e => {
                    setRows(rows.map(rawRow => {
                      if (rawRow.id === row.id) {
                        rawRow.weight = Number(e.target.value);
                      }
                      return rawRow;
                    }))
                  }}
                  type={'number'} fullWidth className={'bg-white'}/>
              </Grid>
            </Grid>
          )
        })}

        <Button
          onClick={handleClickAdd}
          className={'mt-5 w-50'} variant={'contained'} startIcon={<AddIcon />}>
          Add Row
        </Button>

        <div className={'w-50 m-auto mt-5 text-start'}>
          <Button
            onClick={handleClickCalculate}
            color={'success'}
            variant={'contained'}>
            Calculate
          </Button>

          {finalGradeCalculateStr && (
            <div className={'mt-5'}>
              <div className={'d-flex'}>
                <Typography variant={'h5'} className={'text-end'} style={{width: '150px'}}>
                  Final Grade =
                </Typography>
                <Typography variant={'h5'} className={' ms-2'}>
                  {finalGradeCalculateStr}
                </Typography>
              </div>
              <div className={'d-flex'}>
                <Typography variant={'h5'} className={'text-end'} style={{width: '150px'}}>
                  =
                </Typography>
                <Typography variant={'h5'} className={' ms-2'}>
                  {finalGrade}

                </Typography>
              </div>
            </div>
          )}
        </div>

        {/*<p className={'mt-3 text-start w-50 m-auto'}>Find additional grade needed to get average grade of.</p>*/}

        {/*<div className={'w-50 m-auto'}>*/}
        {/*  <div className="input-group w-25">*/}
        {/*    <input type="text" className="form-control"*/}
        {/*           placeholder="80" />*/}
        {/*    <span className="input-group-text" >*/}
        {/*      %*/}
        {/*    </span>*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*<div className={'w-50 m-auto mt-3'}>*/}
        {/*  <p className={'text-start'}>Select decimal places of result.</p>*/}
        {/*  <div className={'d-flex justify-content-start'}>*/}
        {/*    <ButtonGroup variant="contained" color={'inherit'}>*/}
        {/*      <Button color={'inherit'}>0</Button>*/}
        {/*      <Button color={'inherit'}>1</Button>*/}
        {/*      <Button color={'inherit'}>2</Button>*/}
        {/*    </ButtonGroup>*/}
        {/*  </div>*/}

        {/*  <p className={'text-start mt-3'}>Average grade</p>*/}
        {/*  <Grid container spacing={2}>*/}
        {/*    <Grid item xs={6}>*/}
        {/*      <input className={'form-control'} disabled />*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={6}>*/}
        {/*      <input className={'form-control'} disabled />*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}

        {/*  <p className={'text-start mt-3'}>Grade calculation</p>*/}
        {/*  <div>*/}
        {/*    <textarea className={'form-control'} disabled rows={4}></textarea>*/}
        {/*  </div>*/}

        {/*  <p className={'text-start mt-3'}>Additional grade needed</p>*/}
        {/*  <Grid container spacing={2}>*/}
        {/*    <Grid item xs={6}>*/}
        {/*      <input className={'form-control'} disabled />*/}
        {/*    </Grid>*/}
        {/*    <Grid item xs={6}>*/}
        {/*      <input className={'form-control'} disabled />*/}
        {/*    </Grid>*/}
        {/*  </Grid>*/}

        {/*</div>*/}

      </div>



    </GradeCalculatorContainer>
  )
}
