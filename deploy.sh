rm -f -r dist
ember build --environment="production"
cp -R dist /Users/wen/Documents/"Google App Engine Projects"/siwimi-frontend
appcfg.py -A sincere-axon-86815 update /Users/wen/Documents/"Google App Engine Projects"/siwimi-frontend


