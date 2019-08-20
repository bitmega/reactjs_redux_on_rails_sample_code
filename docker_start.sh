#/docker_start.sh
#!/bin/bash
/bin/bash -l -c "npm install"
/bin/bash -l -c "bundle check || bundle install"
/bin/bash -l -c "bundle exec rake db:migrate"
/bin/bash -l -c "rm tmp/pids/server.pid"
/bin/bash -l -c "bundle exec rails s -p 3000 -b 0.0.0.0"