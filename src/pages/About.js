import userContext from "../context/userContext";
import Base from "../components/Base";

const About = () => {
  return (
    <userContext.Consumer>
      {(object) => (
        <Base>
          <div style={{ fontFamily: 'Roboto, sans-serif', background: 'linear-gradient(to right, #f8cdda, #1d2b64)', minHeight: '100vh', margin: 0, padding: '50px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ maxWidth: '1200px', width: '90%', background: 'rgba(255, 255, 255, 0.8)', padding: '40px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', borderRadius: '15px', transition: 'transform 0.3s' }}>
              <h1 style={{ textAlign: 'center', color: '#1d2b64', marginBottom: '20px', fontFamily: 'Poppins, sans-serif' }}>About Us</h1>
              <p style={{ textAlign: 'center', color: '#666', fontSize: '18px', marginBottom: '40px' }}>At Daily Journal, we are passionate about sharing stories, insights, and inspiration with our community. Our blog is a vibrant space where creativity meets knowledge, and where every post is a new adventure.</p>

              <div style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#1d2b64', fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}>Who We Are</h2>
                <p style={{ color: '#666', fontSize: '16px', textAlign: 'center', margin: '0 20px' }}>
                  We are a team of dedicated writers, photographers, and enthusiasts who love to explore and document the world around us. Our diverse backgrounds and interests allow us to cover a wide range of topics, ensuring there's something here for everyone.
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#1d2b64', fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}>What We Do</h2>
                <p style={{ color: '#666', fontSize: '16px', textAlign: 'center', margin: '0 20px' }}>
                  From informative articles and how-to guides to personal stories and stunning photography, Daily Journal offers a rich tapestry of content designed to educate, entertain, and inspire. We believe in the power of words and images to make an impact, and we strive to deliver high-quality content that resonates with our readers.
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#1d2b64', fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}>Our Mission</h2>
                <p style={{ color: '#666', fontSize: '16px', textAlign: 'center', margin: '0 20px' }}>
                  Our mission is to create a welcoming and engaging platform where readers can discover new ideas, gain fresh perspectives, and find a sense of community. We aim to foster curiosity, encourage learning, and celebrate the beauty of everyday life through our posts.
                </p>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <h2 style={{ color: '#1d2b64', fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}>Join Our Community</h2>
                <p style={{ color: '#666', fontSize: '16px', textAlign: 'center', margin: '0 20px' }}>
                  We invite you to join us on this journey. Whether you're here to read, learn, share, or just enjoy beautiful photography, we hope you find something that speaks to you. Don't hesitate to leave comments, share our posts, and connect with us on social media. Thank you for visiting Daily Journal. We’re excited to have you here and can’t wait to share our next story with you. Happy reading!
                </p>
              </div>

              <p style={{ textAlign: 'center', color: '#1d2b64', fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 'bold' }}>Daily Journal</p>
            </div>
          </div>

          {console.log(object)}
        </Base>
      )}
    </userContext.Consumer>
  );
};

export default About;
