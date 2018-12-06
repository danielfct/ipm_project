import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import {LabelOutlined} from "@material-ui/icons";
import Button from "@material-ui/core/Button/Button";
import SvgGithub from "../../assets/icons/SvgGithub";
import {Web} from "@material-ui/icons";

class SecondPrototype extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <LabelOutlined className={classes.icon}/>Briefing</Typography>
                </Paper>
                <Paper>
                    <Typography className={classes.text}>
                        <p>O <b>savr</b> é uma plataforma baseada na Web que permite aos seus utilizadores gerir dinheiro de forma simples.</p>
                        <p>No dia-a-dia, cada pessoa faz gastos monetários nas mais variadas áreas. Estas podem ser o
                            automóvel (avarias, combustível, seguro, inspeção), refeições, lazer (cinema, museus, bares),
                            ofertas, e muitas outras. No entanto, devido à velocidade a que a vida corre, isto é, a quantidade
                            de coisas que se tem para fazer, acaba por ser difícil gerir o dinheiro de forma consciente.
                            Muitas vezes não se tem noção do quanto se tem gasto em dada área, o que leva a gastos excessivos.</p>
                        <p>É este o problema que o savr se propõe resolver. Trata-se de um website que, através de uma
                            interface simples e elegante, oferece recursos que permitem a qualquer utilizador gerir facilmente
                            o seu dinheiro. Quando se obtém uma receita (valor monetário), regista-se no savr, explicitando
                            a sua categoria (salário, oferta, etc). Semelhantemente, este processo é repetido para os gastos.
                            Com base nesta informação, pode-se consultar uma série de informações estatísticas que permite,
                            ao utilizador perceber claramente o seu histórico de gastos. O sistema é, ainda, capaz de oferecer
                            sugestões ao utilizador para que este faça uma gestão mais eficiente do seu dinheiro.</p>
                    </Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <LabelOutlined className={classes.icon}/>Url do protótipo</Typography>
                </Paper>
                <div className={classes.center}>
                    <Button
                        className={classes.button}
                        href="https://philipejoel.wixsite.com/savr?fbclid=IwAR1-ZVufpdadcVKAyMkNzwlBI4-lzH6P92iZPhxgSgglXp8HqMS-VRnjB5w"
                        target="_blank">
                        <Paper className={classes.prototypeLink}>
                            <Typography><Web className={classes.icon}/>Protótipo</Typography>
                        </Paper>
                    </Button>
                </div>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <LabelOutlined className={classes.icon}/>Instruções de startup</Typography>
                </Paper>
                <Paper>
                    <Typography className={classes.text}>
                        <p>Basta seguir no url, o site é suposto ser usado com Desktop.</p>
                        <p>O site só está preparado para lidar com os cenários descritos, outras funcionalidades não
                            nos foi possível implementar.</p>
                    </Typography>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <LabelOutlined className={classes.icon}/>Cenários</Typography>
                </Paper>
                <Paper>
                    <Paper>
                        <Paper className={classes.centerSubtitle}>
                            <Typography className={classes.centerText}>
                                <b>Cenário 1.</b> Nova despesa.</Typography>
                        </Paper>
                        <Typography className={classes.text}>
                            <p>O Manuel trocou o seu automóvel antigo a gasolina por um mais moderno com motor a gasóleo
                                para conseguir poupar algum dinheiro sempre que ia às bombas encher o depósito de
                                combustível. Mas recentemente, e já fora da garantia, o automóvel só tem dado problemas
                                e, claro, muitas despesas inesperadas. </p>
                            <p>    Com o aparecimento de uma luz de aviso relativa
                                ao motor, o Manuel teve que levar o seu automóvel à oficina. Após inspeção dos mecânicos
                                foi descoberto que o problema estava no filtro de partículas e que este tinha de ser
                                trocado. A reparação não foi barata, mas o Manuel não teve alternativa e pagou 975€ pelo
                                novo filtro e pelo serviço dos mecânicos.</p>
                            <p>Ajude o Manuel a introduzir a nova despesa.</p>
                        </Typography>
                        <Paper className={classes.centerSubtitle}>
                            <Typography className={classes.centerText}>
                                <b>Cenário 2.</b> Geração de gráfico.</Typography>
                        </Paper>
                        <Typography className={classes.text}>
                            <p>Com os recentes gastos inesperados, o Manuel está preocupado com as suas poupanças.</p>
                            <p>Ajude o Manuel a visualizar num gráfico de barras todas as suas despesas durante
                                o mês anterior (setembro) de forma a poder organizar melhor o seu orçamento para o mês
                                atual (outubro).</p>
                        </Typography>
                        <Paper className={classes.centerSubtitle}>
                            <Typography className={classes.centerText}>
                                <b>Cenário 3.</b> Gráfico em PDF.</Typography>
                        </Paper>
                        <Typography className={classes.text}>
                            <p>Depois das demasiadas despesas que o automóvel lhe está a causar, o Manuel está a
                                ponderar se deve ou não trocar de automóvel. Para o ajudar na decisão, ele gostava de
                                visualizar todos os seus gastos no automóvel no ano de 2017.</p>
                            <p>Ajude o Manuel a obter em PDF o gráfico pretendido.</p>
                        </Typography>
                        <Paper className={classes.centerSubtitle}>
                            <Typography className={classes.centerText}>
                                <b>Cenário 4.</b> Histórico.</Typography>
                        </Paper>
                        <Typography className={classes.text}>
                            <p>Logo após uma revisão ao automóvel, o Manuel quer comparar os gastos com a revisão
                                anterior que aconteceu em março de 2017.</p>
                            <p>Ajude o Manuel a fazer essa comparação.</p>
                        </Typography>
                    </Paper>
                </Paper>
            </div>
        );
    }
}

const style = {
    prototypeLink: {
        padding: "10px",
        textAlign: "center",
    },
    center: {
        textAlign: "center"
    },
    button: {
        padding: "0",
        marginTop: "20px",
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
    centerSubtitle: {
        display: "table",
        margin: "0 auto",
        alignText: "center",
        padding: "15px",
        fontSize: "14px"
    },
    icon: {
        marginRight: "5px",
        marginBottom: "0"
    }
};

export default withStyles(style)(SecondPrototype);
