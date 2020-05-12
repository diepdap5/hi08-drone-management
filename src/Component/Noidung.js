import React from 'react';
import Grid from '@material-ui/core/Grid'


function NoiDung() {
    const Group_names = ['HI_01','HI_02','HI_03','HI_04','HI_05','HI_06','HI_07','HI_08','HI_09','HI_10']
    return (
		<div>
			<Grid item lg = {12} >
                <Grid container justify="center" spacing={0}>
                    {Group_names.map((value) => (
                        <Grid key={value} item lg = {3}>
                            <div className="groupDetail">
                                {value}
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
		</div>
	);
}

export default NoiDung;