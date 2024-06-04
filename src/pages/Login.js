import { useState } from "react";
import { toast } from "react-toastify";
import {
  Label,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Button,
} from "reactstrap";
import Base from "../components/Base";
import { loginUser } from "../services/user-service";
import { doLogin } from "../auth";
import { useNavigate } from "react-router-dom";
import userContext from "../context/userContext";
import { useContext } from "react";

const Login = () => {
  const userContxtData = useContext(userContext);

  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;
    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  const handleReset = () => {
    setLoginDetail({
      email: "",
      password: "",
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(loginDetail);
    //validation
    if (
      loginDetail.email.trim() == "" ||
      loginDetail.password.trim() == ""
    ) {
      toast.error("email or Password  is required !!");
      return;
    }

    //submit the data to server to generate token
    loginUser(loginDetail)
      .then((data) => {
        console.log(data);

        //save the data to localstorage
        doLogin(data, () => {
          console.log("login detail is saved to localstorage");
          //redirect to user dashboard page
          userContxtData.setUser({
            data: data.user,
            login: true,
          });
          navigate("/user/dashboard");
        });

        toast.success("Login Success");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 400){
          toast.error(error.response.data);
          handleReset();
          navigate("/login");
        } else if(error.response.status == 404) {
          toast.error(error.response.data);
          handleReset();
          navigate("/signup");
        } else {
          toast.error("Something went wrong  on sever !!");
        }
      });
  };

  return (
    <Base >
      <Container style={{ color: '#1d2b64', fontFamily: 'Poppins, sans-serif' ,height: '100vh'}}>
        <Row className="mt-4">
          <Col
            sm={{
              size: 6,
              offset: 3,
            }}
          >
            <Card color="light" style={{ maxWidth: '1200px', width: '100%', background: 'rgba(255, 255, 255, 0.8)', padding: '40px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', borderRadius: '15px', transition: 'transform 0.3s' }}>
              <CardHeader style={{ textAlign : 'center', background: 'rgba(255, 255, 255, 0.8)'}} >
                <h3>Login Here !!</h3>
              </CardHeader>

              <CardBody>
                <Form onSubmit={handleFormSubmit}>
                  {/* Email field */}

                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input
                      type="text"
                      id="email"
                      value={loginDetail.email}
                      onChange={(e) => handleChange(e, "email")}
                    />
                  </FormGroup>

                  {/* password field */}

                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      id="password"
                      value={loginDetail.password}
                      onChange={(e) => handleChange(e, "password")}
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button color="dark" outline>
                      Login
                    </Button>
                    <Button
                      onClick={handleReset}
                      className="ms-2"
                      outline
                      color="secondary"
                    >
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <br></br>    
        <br></br>                
        <p style={{ textAlign: 'center', color: '#1d2b64', fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 'bold' }}>Daily Journal</p>
      </Container>
    </Base>
  );
};

export default Login;
