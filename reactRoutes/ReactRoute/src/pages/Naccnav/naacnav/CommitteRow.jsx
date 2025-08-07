const CommitteeRow = ({ img, name, designation }) => (
  <tr>
    <td data-label="Photo">
      <img src={img} alt={name} className="member-photo" loading="lazy" />
    </td>
    <td data-label="Name">{name}</td>
    <td data-label="Designation">{designation}</td>
  </tr>
);

export default CommitteeRow