function Student({ student }) {
  return (
    <div>
      <h3>Student</h3>
      {student.map((student,name) => (
        <div key={name}>
          <ul>
            <li>
              <h4>{student.name}</h4>
            </li>
            <li>
              <h4>{student.age}</h4>
            </li>
            <li>
              <h4>{student.email}</h4>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Student;