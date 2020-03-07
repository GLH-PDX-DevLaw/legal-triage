//Each question has a field for flagging follow up questions,
//A field for the question,
//a field for the answers,
//a field for how the answers should be displayed (dropdown, checkbox, etc),
//a field for any contextual information for a question

//Context will be an array of arrays. Each index in the parent array represents the contextual information for an answer at the same index in the answer array. The contextual information will be in the child array. This allows contextual information to have display information saved within it, such as calling it a paragraph or list item element.
//If only one out of a few answers to a question has contextual information, the other answers will have a null value in the associated context array.

//EX:
// an * denotes having contextual information for that answer

// Answer: A1, A2, A3*
// Context: [null, null, [{ type: 'p', text: 'blah blah'}]]

// Answer: A1*, A2, A3
// Context: [[{type: 'p', text: 'blah'}, { type: 'li', text: 'blah'}], null, null]


const q1 = {
  hasFollowUp: false,
  question: 'What state do you live in?',
  answers: ['AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY']
};

const q2 = {
  hasFollowUp: false,
  question: 'What is the level of danger you are in?',
  answer: 
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
        type: 'li',
        text: 'Oregon Domestic Violence Victim Services - https://www.oregon.gov/dhs/abuse/domestic/pages/index.aspx'
      }, {
        type: 'li',
        text: 'Oregon Coalition Against Domestic Violence - https://www.ocadsv.org/find-help' 
      }, {
        type: 'li',
        text: 'Call to Safety - https://calltosafety.org/'
      }, {
        type: 'li',
        text: 'Battered Persons Advocacy - https://peaceathome.com/'
      }
    ],
    null,
    null
  ]
};

const q3 = {

};

const questionList = [q1, q2, q3];

export default questionList;
