<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Excecuter dans le cadre du developpement

1. Cloner le projet
2. Executer la commande suivante:

```
npm install
```

3. Installer Nest CLI

```
npm i -g @nestjs/cli
```

4. Base de données

```
docker-compose up -d
```

5. Cloner le fichier `.env.template` et renomme la copie en `.env`

6. Remplir les variables d'environnement definies dans le fichier `.env`

7. Executer l'application en dev:

```
npm run start:dev
```

8. Reconstruire la base de données avec SEED

```
http://localhost:3000/api/v2/seed
```

## Pile utilisée:

- MongoDB
- NestJS
