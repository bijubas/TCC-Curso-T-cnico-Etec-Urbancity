# Resumo do projeto
 Durante o Ensino Médio Técnico em Informática para Internet na ETEC Albert Einstein, desenvolvi em equipe um projeto de criação de um site utilizando JavaScript, CSS e HTML, com o objetivo de conectar voluntários interessados em participar da revitalização das ruas de São Paulo. No projeto, realizamos pesquisas aprofundadas sobre o público-alvo para entender suas necessidades e incentivar o engajamento social. Também elaboramos diagramas de classes e diagramas entidade-relacionamento (ER), aplicando conceitos de modelagem de sistemas e banco de dados durante o desenvolvimento da plataforma.

# Funcionamento do Site
https://github.com/user-attachments/assets/95f7c66c-46f0-4876-9419-caee835cc5f9

# Campo de pesquisa
As pesquisas foram aprofundadas sobre o público-alvo para compreender suas necessidades, interesses e formas de engajamento, utilizando essas informações para desenvolver uma plataforma mais acessível, intuitiva e voltada à mobilização de voluntários para ações de revitalização urbana em São Paulo.

<br></br>
<img width="2080" height="932" alt="Image" src="https://github.com/user-attachments/assets/9b32943a-4836-4bb5-b4ec-08f96aa4d451" />
Esta pergunta a ser realizada é a respeito da idade do participante, com o intuito de saber o nosso público-alvo para remanejar nossa forma de comunicação no próprio site e propagandas, além de influenciar nas escolhas referentes ao design da plataforma web.

<br></br>
<img width="2360" height="1476" alt="Image" src="https://github.com/user-attachments/assets/fd1ceeee-97bc-4299-88c6-8bc5c5ca436b" />
Esta pergunta possui o objetivo de ter conhecimento das áreas mais necessitadas do nosso projeto, mapeando assim as áreas mais afetadas pelo acúmulo de lixo e carentes de cuidados.

<br></br>
<img width="2360" height="580" alt="Image" src="https://github.com/user-attachments/assets/3186b151-9e97-4145-ae56-50fce353983d" />
Na última pergunta, questiona-se aos participantes se os mesmos participariam de uma ação voluntariada para revitalização de espaços públicos, objetivando saber se a ideia do projeto seria acolhida pelo público.

# Diagramas de Banco de dados
Realizamos a modelagem do sistema por meio de diagramas de classes e diagramas entidade-relacionamento (ER), estruturando a organização do banco de dados e o funcionamento da plataforma. Essa etapa foi crucial para definir entidades, relacionamentos, funcionalidades e a interação entre os usuários e o sistema, garantindo uma estrutura mais organizada.

<br></br>
Diagrama de classes 
<img width="682" height="522" alt="Image" src="https://github.com/user-attachments/assets/03165017-8c93-4e7d-a258-7626e001435b" />

O diagrama de classes possui 4 classes: USER, DENÚNCIA, LOCALIDADES E ENDEREÇO. O "User" representa o usuário, que possui os atributos: id_user, nome_user, login, senha (fazem parte da autenticação do site) e endereco_user. No diagrama, a classe "User" poderá fazer as seguintes operações: Cadastro, login, verificar a senha, doar, voluntariar-se e denunciar um local.
A classe "User" possui duas heranças: A tabela PF (pessoa física), que possui um atributo (CPF), poderá realizar as operações de doação e se voluntariar. Já a tabela PJ, que possui os seguintes atributos: CNPJ, nome fantasia e nome social, poderá realizar apenas a operação de doações. As mesmas estão relacionadas com a verificação do tipo do usuário, e sua operação no site. A classe user está relacionada a classe "Denuncia", em que um usuário poderá realizar uma ou muitas denúncias.
A classe "Denúncia" representa as denúncias de localidades feitas pelo usuário. A mesma possui os seguintes atributos: id_denuncia e data. Contém também a seguinte operação: criar um local por uma denúncia. A classe "Denúncias" está relacionada com a classe localidade, podendo ser feita uma ou muitas denúncias a uma localidade. 
A classe "localidades" representa o local que precisa ser revitalizado. A mesma possui os seguintes atributos: descrição, tipo_localidade e problema. A classe "localidades" possui relacionamento com a classe "Endereço", onde, localidades pertence a um endereço, e um endereço pertence a uma ou muitas localidades. 
A classe "ENDEREÇO", representa o endereço dos locais a serem revitalizados. A mesma possui os seguintes atributos: id_endereco, número, complemento, logradouro, CEP, bairro, município e UF. Poderá realizar as seguintes operações: consultar endereço da herança PJ e consultar endereço da classe localidade
A classe "ENDEREÇO" possui relacionamento com a classe "denúncia", em que um endereço possuirá uma ou muitas denúncias. A classe "Endereço", também possui relacionamento com a herança da classe "USER", a mesma poderá verificar o endereço das pessoas físicas e a sede das pessoas jurídicas (empresas).

<br></br>
Diagrama de entidade e relacionamento 
<img width="1012" height="515" alt="Image" src="https://github.com/user-attachments/assets/cede112c-5777-4109-a147-39f1db06de65" />
O Diagrama Entidade Relacionamento possui 4 entidades: USER, DENÚNCIA, LOCALIDADES E ENDEREÇO. O "User" representa o usuário, que possui os atributos: id_user (como chave primária para identificação única do mesmo), nome_user, login, senha (fazem parte da autenticação do site), tipo_user (para identificação de voluntários e empresas parceiras), endereco_user. 
No diagrama, a entidade "User" possui relacionamento com a entidade "Denúncia", podendo fazer uma ou muitas denúncias. A "Denúncia" representa as denúncias de localidades feitas pelo usuário. A mesma possui os seguintes atributos: id_denuncia (como chave primária, para identificação única da mesma), data, id_user (como chave estrangeira, para identificação do usuário ao realizar uma denúncia) id_endereco, id_localidades (ambas como chave estrangeira, para identificação do endereço e localidade que está sendo denunciada respectivamente) problema (para relatar o problema de uma determinada localidade).
A entidade "Denúncia" possui relacionamento com a entidade "localidades", em que, a entidade "localidades" pode receber uma ou muitas denúncias. A entidade "localidades" representa o local que precisa ser revitalizado. A mesma possui os seguintes atributos:id_localidades (para identificação única de cada local, ou seja, uma chave primária), descrição, id_endereco (uma chave estrangeira, para identificação do endereço em que uma localidade se encontra), tipo_localidade.
A entidade "localidades" possui relacionamento com a entidade "Endereço", em que, localidades pertence a um endereço, e um endereço pertence a uma ou muitas localidades. A entidade "ENDEREÇO", representa o endereço dos locais a serem revitalizados. A mesma possui os seguintes atributos: id_endereco (como chave primária, para identificação única do endereço), número, complemento, logradouro, CEP, bairro, município e UF
A entidade "ENDEREÇO" possui relacionamento com a entidade "denúncia", em que um endereço pode possuir uma ou muitas denúncias. A entidade "Endereço", também possui relacionamento com user, indicando o local em que o mesmo mora, ou a sede de sua empresa.



