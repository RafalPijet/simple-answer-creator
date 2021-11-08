import type { NextPage } from 'next';
import React, { useState, useEffect } from 'react';
import {
  Grid,
  Paper,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Typography,
} from '@mui/material';
import Head from 'next/head';
import { Question, CaseContent, Entry, AvailableStep } from '../types';
import { data } from '../entry';
import { useStyles } from '../styles/indexStyles';
const Home: NextPage = () => {
  const classes = useStyles();
  const [step, setStep] = useState(0);
  const [creatorResult, setCreatorResult] = useState<Question[]>([]);
  const [questionsForm, setQuestionsForm] = useState<CaseContent>();
  const [chosenAnswer, setChosenAnswer] = useState<Question | null>(null);

  useEffect(() => {
    const entry = data.find((item: Entry) => item.step === step);
    if (entry) {
      if (entry.cases.length === 1) {
        setQuestionsForm(entry.cases[0]);
      }
      if (entry.cases.length > 1 && chosenAnswer !== null) {
        const result = entry.cases.find(
          (item: CaseContent) => item.caseId === chosenAnswer.id
        );
        if (result) {
          setQuestionsForm(result);
        }
      }
    }
  }, [step]);

  const selectAnswerHandling = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChosenAnswer(JSON.parse(e.target.value));
  };

  const buttonsHandling = (value: AvailableStep) => {
    setStep(step + value);
    if (chosenAnswer !== null) {
      if (value === AvailableStep.increment) {
        setCreatorResult([...creatorResult, chosenAnswer]);
      } else {
        if (creatorResult.length) {
          const result = [...creatorResult];
          result.pop();
          setCreatorResult(result);
          if (result.length) setChosenAnswer(result[result.length - 1]);
        }
      }
    }
  };

  return (
    <div className={classes.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Answers Creator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Paper className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <FormControl component="fieldset" className={classes.selectBox}>
              {questionsForm !== undefined && (
                <>
                  <FormLabel component="legend">
                    {questionsForm.title}
                  </FormLabel>
                  <RadioGroup
                    value={JSON.stringify(chosenAnswer)}
                    onChange={selectAnswerHandling}
                  >
                    {questionsForm.questions.map((item: Question) => {
                      return (
                        <FormControlLabel
                          key={item.id}
                          value={JSON.stringify(item)}
                          label={item.choice}
                          control={<Radio />}
                        />
                      );
                    })}
                  </RadioGroup>
                </>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} md={4} className={classes.center}>
            <Typography
              style={{ textTransform: 'lowercase' }}
              variant="overline"
            >
              Chosen options:{' '}
              {creatorResult.map((item: Question) => {
                return (
                  <Typography variant="overline" key={item.id}>
                    {item.choice},
                  </Typography>
                );
              })}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4} className={classes.center}>
            <Button
              onClick={() => buttonsHandling(AvailableStep.decrement)}
              variant="outlined"
              disabled={step === 0}
            >
              Back
            </Button>
            <Button
              style={{ marginLeft: 20 }}
              onClick={() => buttonsHandling(AvailableStep.increment)}
              variant="outlined"
              disabled={step === data.length || chosenAnswer === null}
            >
              Next
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={4} className={classes.center}>
            <Typography>
              step: {step}/{data.length}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Home;
