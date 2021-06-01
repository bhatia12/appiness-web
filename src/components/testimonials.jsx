import Faq from "react-faq-component";
const data={rows:[{
  "title": "What are the conditions that requireBone Marrow Transplant?",
  "content":"BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders." 
},
{
  "title": "Which are the hematological diseases that may benefit from bone marrow transplants?",
  "content":"BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders."

},
{
  "title": "Which are the Cancers that may benefit from bone marrow transplants?",
  "content":"BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders."

},
{
  "title": "Do bone marrow failure syndromes require BMT?",
  "content":"BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders."

},
{
  "title": "What are Primary Immune Deficiency diseases ?",
  "content":"BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders."

},
{
  "title": "Which are the immune deficiencies that warrant BMT?",
  "content":"BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders."

},
{

  "title": "What makes transplants at Aster CMI unique? ",
  "content":"BMT is the treatment of choice for blood disorders like Thalassemia, Sickle Cell anemia, bone marrow failure syndromes like Aplastic anemia, serious immune deficiencies and certain genetic metabolic disorders."
}]}

const styles = {
  titleTextColor: 'blue',
  rowTitleColor: '#1D5AA6',
  rowTitleTextSize: '20px',
  rowContentColor: '#000000',
  rowContentPaddingBottom: '15px',
  rowContentPaddingLeft: '10px',
  rowContentTextSize: '14px',
  arrowColor: "#1D5AA6",
}
export const Testimonials = (props) => {
  return (
    <div>
      <div className='container'>
        
        <div className='row'>
          <Faq 
            data={data}
            styles={styles}
          />
        </div>
      </div>
    </div>
  )
}
