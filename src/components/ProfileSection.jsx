const ProfileSection = ({ photo, name, researchArea, contact }) => (
    <section className="pa4 bg-light-gray w-60-l center" id="profile">
        <div className="tc">
            <img src={photo} alt={`${name}'s headshot`} className="br-100 h5 w5 dib" />
            <h2 className="f3 mt3">{name}</h2>
            <p className="f5">{researchArea}</p>
            <p className="f6">{contact.email}</p>
        </div>
    </section>
);

export default ProfileSection;

