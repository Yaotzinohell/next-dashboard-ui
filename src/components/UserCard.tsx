import ReceiptIcon from '@mui/icons-material/Receipt'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
interface UserCardProps {
  noinci: number;
  description: string;
}
const UserCard: React.FC<UserCardProps> = ({ noinci, description}) => {
  return (
    <div className="p-4 flex-1 cursor-pointer">
      <Card className='color-black'>
        <CardHeader>
          <div>
            <CardTitle className='mb-3'>{noinci}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  )
}

export default UserCard
