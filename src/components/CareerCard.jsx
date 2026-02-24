function CareerCard({ title, description, skills }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Skills:</strong> {skills}</p>
    </div>
  );
}

export default CareerCard;