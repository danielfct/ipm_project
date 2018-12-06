import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import {LabelOutlined} from "@material-ui/icons";
import classNames from "classnames";
import loginPageImage from "assets/images/loginPageImage.png";
import homePageImage from "assets/images/homePageImage.png";
import expenseRevenueImage from "assets/images/expenseRevenueImage.png";
import expenseRevenueSuccessImage from "assets/images/expenseRevenueSuccessImage.png";
import chartsPageImage from "assets/images/chartsPageImage.png";
import newChartImage from "assets/images/newChartImage.png";
import newChartSuccessImage from "assets/images/newChartSuccessImage.png";
import viewChartPageImage from "assets/images/viewChartPageImage.png";
import chartsPageImage2 from "assets/images/chartsPageImage2.png";
import chartPdfImage from "assets/images/chartPdfImage.png";
import historyPageImage from "assets/images/historyPageImage.png";
import newChartSuccessImage2 from "assets/images/newChartSuccessImage2.png";

import prototypeImage1 from "assets/images/prototypeImage1.png";
import prototypeImage2 from "assets/images/prototypeImage2.png";
import prototypeImage3 from "assets/images/prototypeImage3.png";

import testsImage1 from "assets/images/testsImage1.png";
import testsImage2 from "assets/images/testsImage2.png";
import testsImage3 from "assets/images/testsImage3.png";
import testsImage4 from "assets/images/testsImage4.png";
import testsImage5 from "assets/images/testsImage5.png";
import testsImage6 from "assets/images/testsImage6.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


class FirstPrototype extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <LabelOutlined className={classes.icon}/>Introdução ao Storyboard</Typography>
                </Paper>
                <Paper>
                    <Typography className={classes.text}>
                        Ao iniciar o savr, o utilizador é confrontado com uma página inicial de login, na qual irá
                        introduzir o seu nome de utilizador e respectiva password, de forma a aceder à usa conta.
                        Uma vez introduzidos os dados, carrega no botão de login.
                    </Typography>
                    <img src={loginPageImage} alt="..." className={classes.centerImage}/>
                    <Typography variant={"caption"} className={classNames(classes.imageLegend, classes.centerText)}>
                        Figura 1 - Página de Login</Typography>
                    <Typography className={classes.text}>
                        Após ser autenticado pelo servidor, é lhe apresentada a página home, com informação básica
                        do seu balanço, despesas, gráfico principal e histórico, e sugestões.
                    </Typography>
                    <img src={homePageImage} alt="..." className={classes.centerImage}/>
                    <Typography variant={"caption"} className={classNames(classes.imageLegend, classes.centerText)}>
                        Figura 2 - Página principal</Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <LabelOutlined className={classes.icon}/>Storyboard do Cenário 1 – Adicionar nova despesa</Typography>
                </Paper>
                <Paper>
                    <Typography className={classes.text}>
                        <p>Para efetuar uma introdução de uma nova despesa o utilizador começa por carregar no botão com
                            o símbolo "-" situado na parte central superior da página principal.</p>
                        <p>
                            Ao carregar nesse botão, aparece-lhe uma janela para introduzir a informação so-bre a sua
                            despesa, escreve o montante, escolhe a categoria de entre as opções, e opcionalmente adiciona uma descrição.
                        </p>
                    </Typography>
                    <img src={expenseRevenueImage} alt="..." className={classes.centerImage}/>
                    <Typography variant={"caption"} className={classNames(classes.imageLegend, classes.centerText)}>
                        Figura 3 - Janela de introdução de despesa</Typography>
                    <Typography className={classes.text}>
                        <p>Carrega no botão de confirmar para finalizar a introdução da despesa.</p>
                    </Typography>
                    <Typography className={classes.text}>
                        <p>Adicionada a despesa, aparece uma pequena janela a confirmar que a despesa foi adicionada com
                            sucesso. Toda a informação relevante é alterada.</p>
                    </Typography>
                    <img src={expenseRevenueSuccessImage} alt="..." className={classes.centerImage}/>
                    <Typography variant={"caption"} className={classNames(classes.imageLegend, classes.centerText)}>
                        Figura 4 - Janela de introdução de despesa com sucesso</Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <LabelOutlined className={classes.icon}/>Storyboard do cenário 2 – Gerar novo gráfico</Typography>
                </Paper>
                <Paper>
                    <Typography className={classes.text}>
                        <p>Agora que obteve confirmação de ter adicionado a despesa, de forma a cumprir a tarefa
                            seguinte, o nosso utilizador carrega, na barra de menu superior, no botão charts.
                            E é levado para a página de visualização e gestão dos gráficos. Para adicionar um novo
                            gráfico à sua lista, carrega no botão de adicionar gráficos.</p>
                    </Typography>
                    <img src={chartsPageImage} alt="..." className={classes.centerImage}/>
                    <Typography variant={"caption"} className={classNames(classes.imageLegend, classes.centerText)}>
                        Figura 5 - Página de gestão e visualização de gráficos</Typography>
                    <Typography className={classes.text}>
                        <p>Ao carregar no botão, é lhe apresentado uma janela para adicionar toda a informação
                            referente ao gráfico que quer adicionar, selecciona as datas referentes ao mês de setembro
                            inteiro, selecciona o tipo de gráfico dentro das opções (escolhe spendings by category),
                            não adiciona nenhum filtro, e define as cores. Carrega no botão save para gravar o novo gráfico.</p>
                    </Typography>
                    <img src={newChartImage} alt="..." className={classes.centerImage}/>
                    <Typography variant={"caption"} className={classNames(classes.imageLegend, classes.centerText)}>
                        Figura 6 – Janela de inserção de novo gráfico</Typography>
                    <Typography className={classes.text}>
                        <p>Ao gravar, é lhe apresentado uma pequena janela de confirmação, e o nosso utilizador vê que
                            foi acrescentado à página um thumbnail com o gráfico recentemente adicionado.</p>
                    </Typography>
                    <img src={newChartSuccessImage} alt="..." className={classes.centerImage}/>
                    <Typography variant={"caption"} className={classNames(classes.imageLegend, classes.centerText)}>
                        Figura 7 - Notificação de operação com sucesso e página com novo gráfico</Typography>
                    <Typography className={classes.text}>
                        <p>Ao clicar no thumbnail, é redireccionado para uma janela onde pode melhor visualizar o gráfico pretendido.</p>
                    </Typography>
                    <img src={viewChartPageImage} alt="..." className={classes.centerImage}/>
                    <Typography variant={"caption"} className={classNames(classes.imageLegend, classes.centerText)}>
                        Figura 8 - Janela com visualização de gráfico</Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <LabelOutlined className={classes.icon}/>Storyboard do cenário 3 – Gerar novo gráfico e obtê-lo num ficheiro PDF.</Typography>
                </Paper>
                <Paper>
                    <Typography className={classes.text}>
                        <p>Uma vez visto um gráfico para as despesas de setembro 2017, volta a trás para a página de
                            visualizar/gerir gráficos.</p>
                    </Typography>
                    <img src={chartsPageImage2} alt="..." className={classes.centerImage}/>
                    <Typography variant={"caption"} className={classNames(classes.imageLegend, classes.centerText)}>
                        Figura 9 - Página para visualização e gestão de gráficos</Typography>
                    <Typography className={classes.text}>
                        <p>Volta a carregar no botão de adicionar gráficos, desta vez escolhendo spendings through time
                            e adicionando o filtro car, carrega no botão de gravar.</p>
                    </Typography>
                    <img src={newChartImage} alt="..." className={classes.centerImage}/>
                    <Typography variant={"caption"} className={classNames(classes.imageLegend, classes.centerText)}>
                        Figura 10 - Janela de introdução dos dados para novo gráfico</Typography>
                    <Typography className={classes.text}>
                        <p>Mais uma vez, aparece-lhe a janela de confirmação, e o thumbnail respectivo é adicionado.
                            Mas desta vez o nosso utilizador carrega no botão de PDF por baixo da nova imagem.</p>
                    </Typography>
                    <img src={newChartSuccessImage2} alt="..." className={classes.centerImage}/>
                    <Typography variant={"caption"} className={classNames(classes.imageLegend, classes.centerText)}>
                        Figura 11 - Notificação de operação com sucesso e thumbnail de novo gráfico</Typography>
                    <Typography className={classes.text}>
                        <p>Ao carregar no botão de PDF, é lhe apresentado um PDF com o novo gráfico completo, a
                            partir daqui ele poderá imprimir, guardar para o próprio computador, entre outras operações.</p>
                    </Typography>
                    <img src={chartPdfImage} alt="..." className={classes.centerImage}/>
                    <Typography variant={"caption"} className={classNames(classes.imageLegend, classes.centerText)}>
                        Figura 12 - PDF gerado com o gráfico selecionado</Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <LabelOutlined className={classes.icon}/>Storyboard do cenário 4 – Visualização do histórico</Typography>
                </Paper>
                <Paper>
                    <Typography className={classes.text}>
                        Por fim, ao voltar para a página principal, o nosso utilizador vê a secção do histórico
                        recente e repara que este não contém a mudança de óleo em 2017,
                    </Typography>
                    <img src={homePageImage} alt="..." className={classes.centerImage}/>
                    <Typography variant={"caption"} className={classNames(classes.imageLegend, classes.centerText)}>
                        Figura 13 - Página principal da plataforma</Typography>
                    <Typography className={classes.text}>
                        Carrega no botão "show more" e é direcionado para a página de visualização do histórico onde
                        poderá fazer scroll e visualizar o seu histórico completo onde pode encontrar a mudança de
                        óleo que aconteceu em 2017 e verificar o seu custo.
                    </Typography>
                    <img src={historyPageImage} alt="..." className={classes.centerImage}/>
                    <Typography variant={"caption"} className={classNames(classes.imageLegend, classes.centerText)}>
                        Figura 14 - Página de histórico completo</Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <LabelOutlined className={classes.icon}/>Fotos do Protótipo</Typography>
                </Paper>
                <Carousel
                    className={classes.carousel}
                    showStatus={false}
                    infiniteLoop={true}
                    useKeyboardArrows={true}
                    autoPlay={true}
                    dynamicHeight={true}
                >
                    <div>
                        <img src={prototypeImage1} alt={"..."}/>
                    </div>
                    <div>
                        <img src={prototypeImage2} alt={"..."}/>
                    </div>
                    <div>
                        <img src={prototypeImage3} alt={"..."}/>
                    </div>
                    <Typography variant={"caption"} className={classNames(classes.imageLegend, classes.centerText)}>
                        Figura 15 - Protótipo</Typography>
                </Carousel>
            </div>
        )
    }
}

const style = {
    carousel: {
        display: "table",
        alignText: "center",
        width: "50%",
        height: "50%"
    },
    text: {
        marginLeft: "5%",
        marginRight: "5%",
        padding: "10px",
        textAlign: "justify",
        fontSize: "15px",
    },
    centerText: {
        display: "table",
        margin: "0 auto",
    },
    paper: {
        display: "table",
        margin: "20px 0 5px 0",
        alignText: "center",
        padding: "15px"
    },
    icon: {
        marginRight: "5px"
    },
    centerImage: {
        display: "block",
        margin: "10px auto 10px auto",
        width: "50%"
    },
    imageLegend: {
        paddingBottom: "5px"
    },
};

export default withStyles(style)(FirstPrototype);
