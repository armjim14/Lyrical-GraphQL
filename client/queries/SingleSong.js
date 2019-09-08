import gql from 'graphql-tag';

export default gql`
    query SongQuery($id: ID!){
        song(id: $id){
            id
            title
            lyrics{
                content
            }
        }
    }
`;
// ! in query means it is require