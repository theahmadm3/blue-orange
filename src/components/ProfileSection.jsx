const ProfileSection = ({ photo, name, researchArea, contact }) => (
    <section className="pa4 flex flex-column items-center" id="profile">
        <div className="w-100 pa3"></div>
        <img src={photo} alt={`${name}'s headshot`} className="br-100 h5 w5 dib" />
        <h2 className="f3">{name}</h2>
        <p className="f5">{researchArea}</p>
        <p className="f6">{contact.email}</p>
    </section>
);

export default ProfileSection;
