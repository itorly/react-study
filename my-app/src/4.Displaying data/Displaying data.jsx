import imgExample from '../img/Hedy Lamarr.jpg'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: imgExample,
  imageSize: 100,
};

export default function Profile() {
  return (
    <>
      <h1>4.Displaying Data</h1>
      <h2>{user.name}</h2>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}