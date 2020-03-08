//Each question has a field for flagging follow up questions,
//A field for the question,
//a field for how the answers should be displayed (dropdown, checkbox, etc),
//a field for the answers,
//a field for any contextual information for an answer

//Context will be an array of arrays. Each index in the parent array represents the contextual information for an answer at the same index in the answer array. The contextual information will be in the child array. This allows contextual information to have display information saved within it, such as calling it a paragraph or list item element.
//If only one out of a few answers to a question has contextual information, the other answers will have a null value in the associated context array.

//EX:
// an * denotes having contextual information for that answer

// Answer: A1, A2, A3*
// Context: [null, null, [{ type: 'p', text: 'blah blah'}]]

// Answer: A1*, A2, A3
// Context: [[{type: 'p', text: 'blah'}, { type: 'li', text: 'blah'}], null, null]

//If a question is a follow up to a previous answer, the question will include a field indicating the parent answer selection needed to render the followup 


const q1 = {
  hasFollowUp: false,
  question: 'What state do you live in?',
  answerDisplay: 'select',
  answers: ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY'],
  context: [null, null, null]
};

const q2 = {
  hasFollowUp: false,
  question: 'What is the level of danger you are in?',
  answerDisplay: 'radio',
  answers: [
    'This is an emergency. I am at risk of immediate physical danger.',
    'I am not at risk of immediate physical danger, but I am worried about my safety or the safety of those I care for in the near future.',
    'I am safe right now, but I was recently in danger and would like to know what my options are. '
  ],
  context: [
    [
      { 
        type: 'p',
        text: 'If you are in immediate risk of physical danger, please call emergency services. Call 911.'
      }, { 
        type: 'p',
        text: 'Here is a list of other resources: '
      }, {
        type: 'p',
        text: 'Oregon Domestic Violence Victim Services - https://www.oregon.gov/dhs/abuse/domestic/pages/index.aspx'
      }, {
        type: 'p',
        text: 'Oregon Coalition Against Domestic Violence - https://www.ocadsv.org/find-help' 
      }, {
        type: 'p',
        text: 'Call to Safety - https://calltosafety.org/'
      }, {
        type: 'p',
        text: 'Battered Persons Advocacy - https://peaceathome.com/'
      }
    ],
    null,
    null
  ]
};

const q3 = {
  hasFollowUp: false,
  question: 'What is your relationship to the person involved?',
  answerDisplay: 'radio',
  answers: [
    'Family member',
    'Household member',
    'Unsure'
  ],
  context: [
    [{ 
      type: 'p',
      text: 'A “family member” could be a spouse, a former spouse, an adult person related to you by blood or marriage, or a person whom you had a child with but never married. Or. Rev. Stat. § 135.230(4).'
    }, {
      type: 'p',
      text: 'This definition is subject to change by the Oregon Legislature.'
    }],
    [{
      type: 'p',
      text: 'A “household member” could be a person you are currently cohabiting or living with, a person you have previously cohabited or lived with, or a person have been involved in a sexually intimate relationship with. Or. Rev. Stat. § 135.230(4). '
    }],
    null
  ]
};

const q4 = {
  hasFollowUp: true,
  question: 'Are there children involved?',
  answerDisplay: 'radio',
  answers: ['Yes', 'No'],
  context: [null, null]
};

const q4F1 = {
  parentAnswer: 'q4A',
  hasFollowUp: false,
  question: 'What are your concerns for the children involved?',
  answerDisplay: 'checkbox',
  answers: [
    'Custody',
    'Medical Care',
    'Housing',
    'Attendance at scool',
    'Other'
  ],
  context: [null, null, null, null, null]
};

const q4F2 = {
  parentAnswer: 'q4A',
  hasFollowUp: false,
  question: 'How many children are involved?',
  answerDisplay: 'radio',
  answers: [
    'One',
    'Two',
    'Three or more'
  ],
  context: [null, null, null]
};

const q4F3 = {
  parentAnswer: 'q4A',
  hasFollowUp: false,
  question: 'What is the age range for the children involved?',
  answerDisplay: 'checkbox',
  answers: [
    'Newbown - 1 year old',
    '1 - 5 years old',
    '5 - 10 years old',
    '10 - 15 years old',
    '15 - 18 years old'
  ],
  context: [null, null, null, null, null]
};

const q5 = {
  hasFollowUp: true,
  question: 'What is happening?',
  answerDisplay: 'radio',
  answers: [
    'Previous or current abuse',
    'Fear of imminent abuse',
    'Unsure'
  ],
  //The information for answer 1 and 2 is the same, meant to be duplicate
  context: [
    [{
      type: 'p',
      text: 'In Oregon, “abuse” is defined as attempting to cause or intentionally, knowingly or recklessly causing physical injury; intentionally, knowingly or recklessly placing another in fear of imminent serious physical injury; or committing sexual abuse.'
    }, {
      type: 'p',
      text: 'Some specific types of abuse are physical abuse, emotional abuse, verbal abuse, and sexual abuse.'
    }],
    [{
      type: 'p',
      text: 'In Oregon, “abuse” is defined as attempting to cause or intentionally, knowingly or recklessly causing physical injury; intentionally, knowingly or recklessly placing another in fear of imminent serious physical injury; or committing sexual abuse.'
    }, {
      type: 'p',
      text: 'Some specific types of abuse are physical abuse, emotional abuse, verbal abuse, and sexual abuse.'
    }]
  ]
};

//context for answer 1, 2, and 4 should be the same
const q5F1 = {
  parentAnswer: 'q5A',
  hasFollowUp: false,
  question: 'What type of abuse is occuring?',
  answerDisplay: 'checkbox',
  answers: [
    'Sexual abuse',
    'Physical abuse',
    'Emotional abuse',
    'Verbal abuse',
    'Unsure'
  ],
  context: [
    [{
      type: 'p',
      text: '“Physical injury” is the impairment of physical condition or substantial pain.'
    }, {
      type: 'p',
      text: 'An “injury” impairs a person’s physical condition if it results in a reduction in the person’s ability to use the body or a bodily organ or if it results in a reduction in a bodily organ’s ability to perform its ordinary function.'
    }, {
      type: 'p',
      text: '“Substantial pain” refers to both the degree and the duration of the pain. Pain is substantial if it is ample or considerable, and the duration of the pain was not fleeting or inconsequential.'
    }, {
      type: 'p',
      text: '“Serious physical injury” is physical injury that creates a substantial risk of death or which causes serious and protracted disfigurement, protracted impairment of health or protracted loss or impairment of the function of any bodily organ.'
    }, {
      type: 'p',
      text: '“Physical injury” and “serious physical injury” include sexual abuse.'
    }],
    [{
      type: 'p',
      text: '“Physical injury” is the impairment of physical condition or substantial pain.'
    }, {
      type: 'p',
      text: 'An “injury” impairs a person’s physical condition if it results in a reduction in the person’s ability to use the body or a bodily organ or if it results in a reduction in a bodily organ’s ability to perform its ordinary function.'
    }, {
      type: 'p',
      text: '“Substantial pain” refers to both the degree and the duration of the pain. Pain is substantial if it is ample or considerable, and the duration of the pain was not fleeting or inconsequential.'
    }, {
      type: 'p',
      text: '“Serious physical injury” is physical injury that creates a substantial risk of death or which causes serious and protracted disfigurement, protracted impairment of health or protracted loss or impairment of the function of any bodily organ.'
    }, {
      type: 'p',
      text: '“Physical injury” and “serious physical injury” include sexual abuse.'
    }],
    null,
    [{
      type: 'p',
      text: '“Physical injury” is the impairment of physical condition or substantial pain.'
    }, {
      type: 'p',
      text: 'An “injury” impairs a person’s physical condition if it results in a reduction in the person’s ability to use the body or a bodily organ or if it results in a reduction in a bodily organ’s ability to perform its ordinary function.'
    }, {
      type: 'p',
      text: '“Substantial pain” refers to both the degree and the duration of the pain. Pain is substantial if it is ample or considerable, and the duration of the pain was not fleeting or inconsequential.'
    }, {
      type: 'p',
      text: '“Serious physical injury” is physical injury that creates a substantial risk of death or which causes serious and protracted disfigurement, protracted impairment of health or protracted loss or impairment of the function of any bodily organ.'
    }, {
      type: 'p',
      text: '“Physical injury” and “serious physical injury” include sexual abuse.'
    }],
    null
  ] 
};

const q5F2 = {
  parentAnswer: 'q5A',
  hasFollowUp: false,
  question: 'If this was a previous experience, when was the last occurence?',
  answerDisplay: 'radio',
  answers: [
    'Within the last 24 hours',
    'Within the last 7 days',
    'Within the last 30 days',
    'Within the last 90 days',
    'Within the last 6 months',
    'Within the last year'
  ],
  context: [
    null,
    null,
    null,
    null,
    null,
    null
  ]
};

const q5F3 = {
  parentAnswer: 'q5B',
  hasFollowUp: false,
  question: 'What do you fear will happen?',
  answerDisplay: 'checkbox',
  answers: [
    'Sexual abuse',
    'Physical abuse',
    'Emotional abuse',
    'Verbal abuse',
    'Unsure'
  ],
  context: [
    [{
      type: 'p',
      text: '“Physical injury” is the impairment of physical condition or substantial pain.'
    }, {
      type: 'p',
      text: 'An “injury” impairs a person’s physical condition if it results in a reduction in the person’s ability to use the body or a bodily organ or if it results in a reduction in a bodily organ’s ability to perform its ordinary function.'
    }, {
      type: 'p',
      text: '“Substantial pain” refers to both the degree and the duration of the pain. Pain is substantial if it is ample or considerable, and the duration of the pain was not fleeting or inconsequential.'
    }, {
      type: 'p',
      text: '“Serious physical injury” is physical injury that creates a substantial risk of death or which causes serious and protracted disfigurement, protracted impairment of health or protracted loss or impairment of the function of any bodily organ.'
    }, {
      type: 'p',
      text: '“Physical injury” and “serious physical injury” include sexual abuse.'
    }],
    [{
      type: 'p',
      text: '“Physical injury” is the impairment of physical condition or substantial pain.'
    }, {
      type: 'p',
      text: 'An “injury” impairs a person’s physical condition if it results in a reduction in the person’s ability to use the body or a bodily organ or if it results in a reduction in a bodily organ’s ability to perform its ordinary function.'
    }, {
      type: 'p',
      text: '“Substantial pain” refers to both the degree and the duration of the pain. Pain is substantial if it is ample or considerable, and the duration of the pain was not fleeting or inconsequential.'
    }, {
      type: 'p',
      text: '“Serious physical injury” is physical injury that creates a substantial risk of death or which causes serious and protracted disfigurement, protracted impairment of health or protracted loss or impairment of the function of any bodily organ.'
    }, {
      type: 'p',
      text: '“Physical injury” and “serious physical injury” include sexual abuse.'
    }],
    null,
    [{
      type: 'p',
      text: '“Physical injury” is the impairment of physical condition or substantial pain.'
    }, {
      type: 'p',
      text: 'An “injury” impairs a person’s physical condition if it results in a reduction in the person’s ability to use the body or a bodily organ or if it results in a reduction in a bodily organ’s ability to perform its ordinary function.'
    }, {
      type: 'p',
      text: '“Substantial pain” refers to both the degree and the duration of the pain. Pain is substantial if it is ample or considerable, and the duration of the pain was not fleeting or inconsequential.'
    }, {
      type: 'p',
      text: '“Serious physical injury” is physical injury that creates a substantial risk of death or which causes serious and protracted disfigurement, protracted impairment of health or protracted loss or impairment of the function of any bodily organ.'
    }, {
      type: 'p',
      text: '“Physical injury” and “serious physical injury” include sexual abuse.'
    }],
    null
  ]
};

const q6 = {
  hasFollowUp: false,
  question: 'What are some of your other concerns?',
  answerDisplay: 'checkbox',
  answers: [
    'Substance abuse',
    'Divorce',
    'Child custody',
    'Medical care',
    'Counseling',
    'Restraining order'
  ],
  context: [
    null,
    null,
    null,
    null,
    null,
    null
  ]
};

const q7 = {
  hasFollowUp: false,
  question: 'Any additional comments?',
  answerDisplay: 'textArea',
  answers: [''],
  context: [null]
};

export const dvQuestions = {
  questionList: [q1, q2, q3, q4, q5, q6, q7],
  question4FollowUps: [q4F1, q4F2, q4F3],
  question5FollowUps: [q5F1, q5F2, q5F3]
};
