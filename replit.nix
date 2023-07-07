{ pkgs }: {
  deps = [       
		pkgs.yarn 
		pkgs.esbuild    
		pkgs.nodejs-18_x  
		pkgs.openssl
	];
}