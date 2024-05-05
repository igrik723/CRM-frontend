import React from "react";
import { Button, Container, Card, Form } from "react-bootstrap";
import { useState } from "react";
import { storekeeperEnterAction, salesmanEnterAction, adminEnterAction } from "../../store/action-creators/action-creators";
import { SHOP_ROUTE, STOCK_ROUTE } from "../../utils/const";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const AuthPage = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

  const check = (login, password) => {
    // Проводите аутентификацию и получайте токен или другие данные.
    // В данном примере используется простая проверка для демонстрации.

    if (login === "storekeeper" && password === "admin") {
      dispatch(storekeeperEnterAction());
      // Сохраняем информацию о входе в локальное хранилище
      localStorage.setItem("user", JSON.stringify({ role: "storekeeper", auth: true }));
      navigate(STOCK_ROUTE);
    } else if (login === "salesman" && password === "admin") {
      dispatch(salesmanEnterAction());
      localStorage.setItem("user", JSON.stringify({ role: "salesman", auth: true }));
      navigate(SHOP_ROUTE);
    } else if (login === "admin" && password === "admin") {
      dispatch(adminEnterAction());
      localStorage.setItem("user", JSON.stringify({ role: "admin", auth: true }));
      navigate(SHOP_ROUTE);
    } else {
      alert("Неправильный логин или пароль");
    }
  };
    
    useEffect(() => {
    // Проверка наличия данных пользователя при загрузке компонента
    const userData = localStorage.getItem("user");

    if (userData) {
      const userObject = JSON.parse(userData);

      // Перенаправление пользователя на соответствующую страницу
      switch (userObject.role) {
          case "storekeeper":
              if (userObject.auth) {
                  dispatch(storekeeperEnterAction());
                  navigate(STOCK_ROUTE);
              }
          break;
          case "salesman":
              if (userObject.auth) {
                  dispatch(salesmanEnterAction());
                  navigate(SHOP_ROUTE);
              }
            break;
          case "admin":
              if (userObject.auth) {
                  dispatch(adminEnterAction());
                  navigate(SHOP_ROUTE);
              }
          break;
        default:
          break;
      }
    }
  }, []);

    return ( 
        <Container
            className="d-flex justify-content-center align-items-center vh-100"
        >
            <Card
                style={{ width: 600 }}
                className="d-flex  p-5"
            >
                <h1
                    className="m-auto"
                >
                    Авторизируйтесь
                </h1>
                <Form
                    className="d-flex flex-column"
                >
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш логин"
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        type="password"
                        placeholder="Введите ваш пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Form>
                <Button
                    className="mt-4"
                    variant="outline-secondary"
                    onClick={() => check(login, password)}
                >
                    Войти
                </Button>
            </Card>
        </Container>
     );
}
 
export default AuthPage;