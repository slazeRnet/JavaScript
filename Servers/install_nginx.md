
## Instaling Nginx Server for Ubunto 20.04 LTS
### 1. [ARTICLE GUIDE FOR INSTALING NGINX](https://www.cyberciti.biz/faq/how-to-install-nginx-on-ubuntu-20-04-lts/)

### :x: nginx: [warn] conflicting server name "marinov-dev.com" on 0.0.0.0:80, ignored

during terminal execution of:
> ubuntu@ip-172-31-29-18:~$ sudo systemctl status nginx.service

you get this nasty error:

```

● nginx.service - A high performance web server and a reverse proxy server
     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
     Active: active (running) since Wed 2020-11-18 21:26:09 UTC; 14min ago
       Docs: man:nginx(8)
    Process: 45460 ExecStartPre=/usr/sbin/nginx -t -q -g daemon on; master_process on; (code=exited, status=0/SUCCESS)
    Process: 45472 ExecStart=/usr/sbin/nginx -g daemon on; master_process on; (code=exited, status=0/SUCCESS)
    Process: 45941 ExecReload=/usr/sbin/nginx -g daemon on; master_process on; -s reload (code=exited, status=0/SUCCESS)
   Main PID: 45473 (nginx)
      Tasks: 2 (limit: 1164)
     Memory: 3.1M
     CGroup: /system.slice/nginx.service
             ├─45473 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
             └─45942 nginx: worker process

Nov 18 21:26:09 ip-172-31-29-18 systemd[1]: Starting A high performance web server and a reverse proxy server...
Nov 18 21:26:09 ip-172-31-29-18 nginx[45460]: nginx: [warn] conflicting server name "marinov-dev.com" on 0.0.0.0:80, ignored
Nov 18 21:26:09 ip-172-31-29-18 nginx[45460]: nginx: [warn] conflicting server name "marinov-dev.com" on [::]:80, ignored
Nov 18 21:26:09 ip-172-31-29-18 nginx[45472]: nginx: [warn] conflicting server name "marinov-dev.com" on 0.0.0.0:80, ignored
Nov 18 21:26:09 ip-172-31-29-18 nginx[45472]: nginx: [warn] conflicting server name "marinov-dev.com" on [::]:80, ignored
Nov 18 21:26:09 ip-172-31-29-18 systemd[1]: Started A high performance web server and a reverse proxy server.
Nov 18 21:38:21 ip-172-31-29-18 systemd[1]: Reloading A high performance web server and a reverse proxy server.
Nov 18 21:38:21 ip-172-31-29-18 systemd[1]: Reloaded A high performance web server and a reverse proxy server.
```

FIX:
remove all configuration of web services that point to the same port (in this case port 80) from config
> etc/nginx/sites-available/<site>.conf
> etc/nginx/sites-enabled/<site>.conf
> home/<site>/
