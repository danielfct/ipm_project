import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/es/Typography/Typography";
import {LabelOutlined} from "@material-ui/icons";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import Image from 'material-ui-image'
import Modal from "@material-ui/core/Modal/Modal";
import image1 from "../../assets/images/1.png"
import image2 from "../../assets/images/2.png"
import image3 from "../../assets/images/3.png"
import image4 from "../../assets/images/4.png"
import image5 from "../../assets/images/5.png"
import image6 from "../../assets/images/6.png"
import image7 from "../../assets/images/7.png"
import image8 from "../../assets/images/8.png"
import image9 from "../../assets/images/9.png"
import image10 from "../../assets/images/10.png"
import image11 from "../../assets/images/11.png"
import image12 from "../../assets/images/12.png"
import image13 from "../../assets/images/13.png"
import image14 from "../../assets/images/14.png"
import image15 from "../../assets/images/15.png"
import image16 from "../../assets/images/16.png"
import image17 from "../../assets/images/17.png"
import image18 from "../../assets/images/18.png"
import image19 from "../../assets/images/19.png"
import image20 from "../../assets/images/20.png"

import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import classNames from "classnames";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import TextField from "@material-ui/core/TextField/TextField";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Button from "@material-ui/core/Button/Button";

class Evaluation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            warning: true,
            openModal: false,
            image: undefined,
            imageCaption: ""
        }
    }

    handleOpenImage = (image, caption) => {
        this.setState({openModal: true, image: image, imageCaption: caption})
    };

    handleCloseImage = () => {
        this.setState({ openModal: false, image: undefined, imageCaption: ""});
    };

    handleCloseWarning = () => {
        this.setState({ warning: false });
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right'}}
                    open={this.state.warning}
                    onClose={this.handleCloseWarning}
                    autoHideDuration={5000}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Clique nas figuras para abrir as respetivas imagens.</span>}
                />
                <Dialog
                    open={this.state.openModal}
                    onClose={this.handleCloseImage}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="image-dialog-title">{this.state.imageCaption}</DialogTitle>
                    <DialogContent>
                        <img className={classes.image} src={this.state.image} alt={"..."}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleCloseImage} color="secondary">
                            Fechar
                        </Button>
                    </DialogActions>
                </Dialog>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>
                        <LabelOutlined className={classes.icon}/>Tabela heuristíca</Typography>
                </Paper>
                <Paper>
                    <Table className={classes.table} padding={"dense"}>
                        <TableHead>
                            <TableRow>
                                <TableCell numeric>Número</TableCell>
                                <TableCell>Problema</TableCell>
                                <TableCell>Heurística</TableCell>
                                <TableCell>Descrição</TableCell>
                                <TableCell numeric>Severidade*</TableCell>
                                <TableCell>Solução</TableCell>
                                <TableCell>Screenshot</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell numeric component="th" scope="row">
                                    1
                                </TableCell>
                                <TableCell>"Cart" sobrepõe-se ao catálogo de pães.</TableCell>
                                <TableCell>Estética / Usabilidade</TableCell>
                                <TableCell>A caixa do cesto de compras que é apresentada no ecrã inicial cobre o
                                    catálogo. Este fenómeno piora quando se adicionam elementos ao mesmo cesto,
                                    sendo que se pode tornar difícil adicionar ao cesto o elemento do catálogo que
                                    fica no canto inferior direito.</TableCell>
                                <TableCell numeric>3</TableCell>
                                <TableCell>Uma boa solução seria ter um cesto de compras permanente, posicionado à
                                    direita do catálogo ao invés de no topo do mesmo. Poderia ser necessário reduzir
                                    o número de elementos no catálogo por linha, mas ainda assim, a experiência de
                                    utilização seria muito superior.</TableCell>
                                <TableCell>
                                    <div className={classes.pointer} onClick={() => this.handleOpenImage(image1, "Figura 1")}>Figura 1 </div>
                                    e <div className={classes.pointer} onClick={() => this.handleOpenImage(image2, "Figura 2")}>Figura 2</div></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell numeric component="th" scope="row">
                                    2
                                </TableCell>
                                <TableCell>Botão "X" do "Cart" tem comportamentos imprevisíveis e/ou incorrectos.</TableCell>
                                <TableCell>Erro / Consistência</TableCell>
                                <TableCell><p>No cesto de compras, após a inserção de um artigo, quando se carrega no
                                    botão "X" associado ao mesmo, acontece um de dois comportamentos:</p>
                                    <p> &bull; Surge um slider em que é possível editar o número de elementos do artigo
                                        (um botão “X” não devia levar a edição de quantidade, devia eliminar);</p>
                                    <p> &bull; O cesto de compras é minimizado e o botão "checkout" desaparece, pelo que se
                                        torna impossível proceder com a compra (pode não ser fácil reproduzir este comportamento).</p>
                                </TableCell>
                                <TableCell numeric>3</TableCell>
                                <TableCell>Adicionar um botão de edição que apresenta o slider da quantidade.
                                    Botão "X" deve apenas remover o produto do cesto de compras.
                                    Corrigir bug que causa o desaparecimento do botão “checkout”.
                                </TableCell>
                                <TableCell><div className={classes.pointer} onClick={() =>
                                    this.handleOpenImage(image3, "Figura 3")}>Figura 3,</div>
                                    <div className={classes.pointer} onClick={() => this.handleOpenImage(image4, "Figura 4")}>figura 4</div>
                                    e<div className={classes.pointer} onClick={() => this.handleOpenImage(image5, "Figura 5")}> figura 5</div></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell numeric component="th" scope="row">
                                    3
                                </TableCell>
                                <TableCell>Slider das quantidades é má opção porque limita o número de pães a meter no carrinho.</TableCell>
                                <TableCell>Usabilidade / Controlo / Eficiência de uso</TableCell>
                                <TableCell><p>No "Inventory", o slider que permite escolher a quantidade de cada pão a
                                    comprar tem como limite 24, embora o programa nos permita encomendar mais do que esse
                                    valor, tornando assim o processo de compra pouco eficiente para o utilizador.</p>
                                </TableCell>
                                <TableCell numeric>2</TableCell>
                                <TableCell>Adicionar um botão de edição que apresenta o slider da quantidade.
                                    Botão "X" deve apenas remover o produto do cesto de compras.
                                    Corrigir bug que causa o desaparecimento do botão “checkout”.
                                </TableCell>
                                <TableCell><div className={classes.pointer} onClick={() => this.handleOpenImage(image6, "Figura 6")}>Figura 6</div></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell numeric component="th" scope="row">
                                    4
                                </TableCell>
                                <TableCell>No carrinho, um nome do item, o correspondente valor e icon de remoção não estão alinhados.</TableCell>
                                <TableCell>Consistência</TableCell>
                                <TableCell><p>No "Inventory", ao ir adicionando artigos ao cart, a janela destes vai
                                    desformatando o alinhamento do nome dos artigos com o preço e o "x" de cancelar.</p>
                                </TableCell>
                                <TableCell numeric>1</TableCell>
                                <TableCell>Trabalhar no design de forma a que os nomes não se desalinhem com a restante
                                    informação associada.
                                </TableCell>
                                <TableCell><div className={classes.pointer} onClick={() => this.handleOpenImage(image7, "Figura 7")}>Figura 7</div></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell numeric component="th" scope="row">
                                    5
                                </TableCell>
                                <TableCell>Items do menu organizados de forma pouco intuitiva.</TableCell>
                                <TableCell>Usabilidade/Standards</TableCell>
                                <TableCell><p>Habitualmente, os elementos dos menus horizontais dos websites são
                                    organizados por ordem decrescente de utilização, sendo que as Definições e Logout
                                    tendem a ficar no final. No Wake N’ Bake, isso não se verifica. Verifica-se que
                                    Logout está na posição certa, mas os restantes botões estão organizados do menos
                                    para o mais utilizado.</p>
                                </TableCell>
                                <TableCell numeric>2</TableCell>
                                <TableCell>A ordem devia ser invertida, excepto para o botão Logout, que está
                                    posicionado correctamente.
                                    Seria também boa ideia o logo do website remeter para a página principal: Inventory.
                                </TableCell>
                                <TableCell><div className={classes.pointer} onClick={() => this.handleOpenImage(image8, "Figura 8")}>Figura 8</div></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell numeric component="th" scope="row">
                                    6
                                </TableCell>
                                <TableCell>Menu desaparece por vezes.</TableCell>
                                <TableCell>Usabilidade / Standards
                                </TableCell>
                                <TableCell><p>Certas ações, como o refrescar da página pelo browser, causam o
                                    desaparecimento do menu, tornando-se impossível navegar pelo site.</p>
                                </TableCell>
                                <TableCell numeric>4</TableCell>
                                <TableCell>Descobrir e corrigir a causa deste fenómeno de forma a que o menu no futuro não desapareça.
                                </TableCell>
                                <TableCell><div className={classes.pointer} onClick={() => this.handleOpenImage(image9, "Figura 9")}>Figura 9</div></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell numeric component="th" scope="row">
                                    7
                                </TableCell>
                                <TableCell>Os planos de compra não são intuitivos.</TableCell>
                                <TableCell>Usabilidade / Standards
                                </TableCell>
                                <TableCell><p>Quando entro em “Plans” pela primeira vez, as opções apenas têm os
                                    valores associados e preciso de selecionar qualquer uma delas para perceber se
                                    envolve pagar 3, 5 ou 7 dias por semana.</p>
                                </TableCell>
                                <TableCell numeric>2</TableCell>
                                <TableCell>Organizar o layout das opções de forma a poder incluir as descrições de cada
                                    plano, de tal modo que um utilizador consiga associar a descrição à opção correta.
                                </TableCell>
                                <TableCell>
                                    <div className={classes.pointer} onClick={() => this.handleOpenImage(image10, "Figura 10")}>Figura 10, </div>
                                    <div className={classes.pointer} onClick={() => this.handleOpenImage(image11, "Figura 11")}>figura 11, </div>
                                    <div className={classes.pointer} onClick={() => this.handleOpenImage(image12, "Figura 12")}>figura 12, </div>
                                    <div className={classes.pointer} onClick={() => this.handleOpenImage(image13, "Figura 13")}>figura 13 </div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell numeric component="th" scope="row">
                                    8
                                </TableCell>
                                <TableCell>Não recebo confirmação ao adicionar um plano de compra.</TableCell>
                                <TableCell>Usabilidade / Feedback
                                </TableCell>
                                <TableCell><p>Quando seleciono um plano de compra, sou remetido para a página inicial,
                                    sem receber qualquer confirmação de que o meu plano ficou registado.</p>
                                </TableCell>
                                <TableCell numeric>2</TableCell>
                                <TableCell>Fazer com que o programa mostre uma pequena janela com uma mensagem a
                                    confirmar que o plano ficou registado.
                                </TableCell>
                                <TableCell>Sem figura</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell numeric component="th" scope="row">
                                    9
                                </TableCell>
                                <TableCell>No mapa, a nossa localização não é explicita.</TableCell>
                                <TableCell>Reconhecimento
                                </TableCell>
                                <TableCell><p>Em "Purchase", no mapa com a localização das padarias e da nossa morada,
                                    o uso da bola verde para a nossa localização no mapa não é muito intuitivo.</p>
                                </TableCell>
                                <TableCell numeric>2</TableCell>
                                <TableCell>Acrescentar uma legenda a informar que a bola verde corresponde à nossa morada.
                                </TableCell>
                                <TableCell><div className={classes.pointer} onClick={() => this.handleOpenImage(image14, "Figura 14")}>Figura 14</div></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell numeric component="th" scope="row">
                                    10
                                </TableCell>
                                <TableCell>No "History", os espaçamentos são incorrectos.</TableCell>
                                <TableCell>Estética
                                </TableCell>
                                <TableCell><p>No "History" cada elemento é separado por uma linha cinzenta, sendo que o
                                    espaçamento entre o texto de um elemento, e o seu separador superior, é bastante
                                    diferente comparado com o do separador inferior.</p>
                                </TableCell>
                                <TableCell numeric>1</TableCell>
                                <TableCell>Corrigir os tamanhos de forma a que ambos os espaçamentos fiquem homogêneos.
                                </TableCell>
                                <TableCell><div className={classes.pointer} onClick={() => this.handleOpenImage(image15,"Figura 15")}>Figura 15</div></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell numeric component="th" scope="row">
                                    11
                                </TableCell>
                                <TableCell>No "Purchase", os tamanhos das janelas são inconsistentes.</TableCell>
                                <TableCell>Estética
                                </TableCell>
                                <TableCell><p>Em "Purchase", ao mudar-mos entre secções a disposição dos elementos
                                    não estão alinhados entre elas, e o tamanho da página varia entre seção, havendo
                                    casos em que os botões ficam demasiado colados às bordas do ecrã.</p>
                                </TableCell>
                                <TableCell numeric>1</TableCell>
                                <TableCell>Alinhar os elementos de cada seção tendo em conta a mudança de seção, e
                                    definir um tamanho fixo comum para o layout de cada seção.
                                </TableCell>
                                <TableCell>
                                    <div className={classes.pointer} onClick={() => this.handleOpenImage(image16, "Figura 16")}>Figura 16, </div>
                                    <div className={classes.pointer} onClick={() => this.handleOpenImage(image17, "Figura 17")}>figura 17, </div>
                                    <div className={classes.pointer} onClick={() => this.handleOpenImage(image18, "Figura 18")}>figura 18, </div>
                                    <div className={classes.pointer} onClick={() => this.handleOpenImage(image19, "Figura 19")}>figura 19</div>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell numeric component="th" scope="row">
                                    12
                                </TableCell>
                                <TableCell>Elementos do menu muito próximos uns dos outros.</TableCell>
                                <TableCell>Estética
                                </TableCell>
                                <TableCell><p>O pequeno espaçamento entre os botões do menu horizontal pode dificultar
                                    a leitura e o processo de clique nos mesmos.</p>
                                </TableCell>
                                <TableCell numeric>1</TableCell>
                                <TableCell>Os botões do menu horizontal deviam ter maior espaçamento.
                                </TableCell>
                                <TableCell><div className={classes.pointer} onClick={() => this.handleOpenImage(image20, "Figura 20")}>Figura 20</div></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
                <Paper className={classes.paper}>
                    <Typography variant={"title"} className={classes.centerText}>* Escala</Typography>
                </Paper>
                <Paper>
                    <Typography className={classes.text}>
                        <p>
                            <p><b>1. Cosmético: </b>Correção não é essencial;</p>
                            <p><b>2. Menor: </b>Correção pouco prioritária;</p>
                            <p><b>3. Maior: </b>Correção prioritária;</p>
                            <p><b>4. Catastrófico: </b>Correção é essencial.</p>
                        </p>
                    </Typography>
                </Paper>
            </div>
        );
    }
}


const style = {
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
    },
    pointer: {
        cursor: "pointer"
    },
    horizontal: {
        display: "flex",
        justifyContent: "center"
    },
    vertical: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    imageLegend: {
        paddingTop: "5px",
        paddingBottom: "5px"
    },
    image: {
        width: "90%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    }
};

export default withStyles(style)(Evaluation);
