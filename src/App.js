import './App.css';
import patientInfo from './patient_fixed.json';

function App() {
  return (
    <div className='patient-info'>
      <div>
        {`Name of patient: ${patientInfo.name.given} ${patientInfo.name.family}`}
      </div>
      <div>{`Organization name: ${patientInfo.managingOrganization.display}`}</div>
      <div>{`Gender: ${patientInfo.gender}`}</div>
      <div>{`Number of conditions they have: ${patientInfo.conditions.length}`}</div>
      <div>
        {`List of all conditions: `}
        {patientInfo.conditions.map((condition, index) => {
          return (
            <div key={index} className='condition'>
              {`- ${condition}`}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
