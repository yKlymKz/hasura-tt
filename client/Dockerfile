FROM node:14.17-alpine 
ARG PORT 

RUN apk update && apk add bash 
RUN apk --no-cache add curl
 
WORKDIR /usr/app 
 
EXPOSE ${PORT} 
# webpack 
EXPOSE 49153

CMD if [ ${APP_ENV} = "development" ] ; then npm run dev ; else npm run build && npm run start ; fi
