import outputImage from '../assets/output.png';

const ChartDisplay = () => {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Feature Importance Chart</h2>
        <img src={outputImage} alt="Feature Importance Chart" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
    );
  };
  
  export default ChartDisplay;