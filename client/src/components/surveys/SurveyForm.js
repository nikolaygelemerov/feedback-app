// SurveyForm shows a form for a user to add input
import React, { memo, useCallback } from 'react';
import { reduxForm, Field } from 'redux-form';

import SurveyField from './SurveyField';

const SurveyForm = ({ handleSubmit }) => {
  const renderFields = useCallback(() => {
    return (
      <div>
        <Field type="text" name="title" component={SurveyField} />
      </div>
    );
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit((values) => console.log(values))}>
        {renderFields()}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default memo(reduxForm({ form: 'surveyForm' })(SurveyForm));
