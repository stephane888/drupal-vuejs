# Drupal vuejs

Paserrele entre une application JS et Drupal. Il permet entre autre de :

- L'authentification basic des requetes
- Dispose d'un utilitaire de connexion via un formulaire, google et facebook
- Utilisation des requete jsonApi

### methode d'authentification basic

Vous devez activer le module "HTTP Basic Authentication" au niveau de l'interface Drupal.
Pour des routes personnaliser, il faut authoriser l'access en ajoutant ce qui suit sur la definition de la route.

```
...
options:
      _auth: ['basic_auth', 'cookie']
```

Au niveau des applications JS, il faut ajouter "?\_format=json" sur les URLs.
