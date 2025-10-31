function Student({ student }) {
  return (
    <div>
      <h3>Student</h3>
      {student.map((student) => (
        <div>
          <ul>
            <li>
              <h4>{student.name}</h4>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Student;