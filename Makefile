install:
		npm ci

brain-even:
		node bin/brain-even.js
	
brain-calc:
		node bin/brain-calc.js

brain-gcd:
		node bin/brain-gcd.js

brain-progression:
		node bin/brain-progression.js

brain-prime:
		node bin/brain-prime.js

brain-games:
		node bin/brain-games.js

publish:
		npm publish --dry-run

lint:
<<<<<<< Updated upstream
npx eslint

lint-fix:
npx eslint --fix
=======
		npx eslint

lint-fix:
		npx eslint --fix.		
>>>>>>> Stashed changes
